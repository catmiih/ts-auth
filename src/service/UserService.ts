import { Prisma, PrismaClient } from "@prisma/client";
import Filter from "../model/Filter";
import User from "../model/User";

const prisma = new PrismaClient();

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
        password: data.password || "",
        email: data.email || "",
        account_status: data.account_status || "",
        created_at: new Date(),
        person: {
          create: person,
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

    
  if (userData && personData) {
    user = new User({
      id: userData.id,
      username: userData.username,
      password: userData.password,
      email: userData.email,
      created_at: userData.created_at,
      account_status: userData.account_status,
      person: personData,
    })
  }

    return user;
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
      const user = await prisma.user.delete({
        where: { id: filter.id },
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
