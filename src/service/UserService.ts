import { Prisma, PrismaClient } from "@prisma/client";
import Filter from "../model/Filter";
import User from "../model/User";

const prisma = new PrismaClient();

class UserService {
  // Função para criar um novo usuário
  async createUser(data: User) {
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
    return result;
  }

  // Função para obter um usuário por ID
  async getUser(filter: Filter) {
    const user = await prisma.user.findUnique({
      where: { id: filter.id },
    });
    return user;
  }

  // Função para atualizar um usuário por ID
  async updateUser(filter: Filter, data: User) {
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

    return user;
  }

  // Função para excluir um usuário por ID
  async deleteUser(filter: Filter) {
    const user = await prisma.user.delete({
      where: { id: filter.id },
    });
    return user;
  }
}

export default UserService;
