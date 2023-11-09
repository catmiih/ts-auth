import { Prisma, PrismaClient } from "@prisma/client";
import Filter from "../model/Filter";
import User from "../model/User";
import PortfolioService from "./PortfolioService";
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();
const portfolioService = new PortfolioService();

class UserService {
  // Função para criar um novo usuário
  async createUser(data: User) {
    try{

      const person: Prisma.PersonCreateWithoutUserInput = {
        name: data.person?.name || "",
        birthday_date: data.person?.birthday_date || new Date(),
      };

      const user = {
        username: data.username || "",
        password: await bcrypt.hash(data.password || "", 10) || "",
        email: data.email || "",
        account_status: data.account_status || "",
        created_at: new Date(),
        person: {
          create: person,
        },
        portfolio: {
          create: [
            {
              port_value: 0.0,
              income_value: 0,
              risk: 1,
            },
          ],
        },
      };

      const result = await prisma.user.create({
        data: user,
      });

      let filter = new Filter({id:result.id})
      
      return this.getUser(filter);
    }catch(error:any){
      if (error.code === 'P2002') {
        return { error: 'Username already exists' };
      }else{
        return {error: error.code}
      }
    }
  }

  // Função para obter um usuário por ID
  async getUser(filter: Filter) {
    let user;

    const userData = await prisma.user.findUnique({
      where: { id: filter.id },
    });
    const personData = await prisma.person.findUnique({
      where: {userId: filter.id}
    });

    const portData = await portfolioService.getWallet(filter.id);

    
  if (userData && personData) {
    user = new User({
      id: userData.id,
      username: userData.username,
      password: userData.password,
      email: userData.email,
      created_at: userData.created_at,
      account_status: userData.account_status,
      person: personData,
      portfolio: portData
    })
  }

    return user;
  }
  // Função para listar usuários por Filter
  async listUsers(filter: Filter) {
    let userList = [];

    const users = await prisma.user.findMany({
      where: { 
        OR:[
          {id: filter.id},
          {username: filter.username},
          {email: filter.email},
          {account_status: filter.account_status},
          {person: {name:filter.person?.name}}
        ],
      },
    });

    for(let userData of users){

      let user;
      const personData = await prisma.person.findUnique({
        where: {userId: userData.id}
      });
  
      const portData = await portfolioService.getWallet(userData.id);
  
      if (userData && personData) {
        user = new User({
          id: userData.id,
          username: userData.username,
          password: userData.password,
          email: userData.email,
          created_at: userData.created_at,
          account_status: userData.account_status,
          person: personData,
          portfolio: portData
        })

        userList.push(user)
      }
    }

    return userList;
  }

  // Função para atualizar um usuário por ID
  async updateUser(filter: Filter, data: User) {
    try{
      const user = await prisma.user.update({
        where: { id: filter.id },
        data: {
          person: {
            update: {
              name: data.person?.name || undefined,
              birthday_date: data.person?.birthday_date || undefined,
            },
          },
        },
      });

      return this.getUser(filter);
    }catch(error:any){
      if (error.code === 'P2002') {
        return { error: 'Username already exists' };
      }else{
        return {error: error}
      }
    }
  }

  // Função para excluir um usuário por ID
  async deleteUser(filter: Filter) {
    try{

      await prisma.portfolio.deleteMany({
        where: { userId: filter.id }
      });
  
     await prisma.alert.deleteMany({
        where: { userid: filter.id }
      });
  
      await prisma.person.delete({
        where: { userId: filter.id }
      });

      const user = await prisma.user.delete({
        where: { id: filter.id }
      });

      return user;
    }catch(error:any){
      if (error.code === 'P2025') {
        return { error: "User doesn't exists" };
      }else{
        return {error: error}
      }
    }
  }
}

export default UserService;
