import { PrismaClient } from '@prisma/client';
import { Request, Response, NextFunction } from 'express';
import User from '../model/User';
import bcrypt from 'bcrypt';
const prisma = new PrismaClient();

class AuthService {

  //AUTH LEVELS
  static readonly ACCESS_LEVEL_ADMIN = 'admin';
  static readonly ACCESS_LEVEL_USER = 'user';
  static readonly ACCESS_LEVEL_API = 'api';
  

  async loginUser(username: string, password: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: { username },
      include: {
        person: true,
        portfolio: true,
        alert: true,
      },
    });

    if (!user) {
      return null;
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return null;
    }

    // Crie um novo objeto User com as propriedades relevantes
    const simplifiedUser: User = {
      id: user.id,
      username: user.username,
      password: user.password,
      email: user.email,
      created_at: user.created_at,
      account_status: user.account_status,
      person: user.person,
      portfolio: user.portfolio,
      alert: [],
    };

    return simplifiedUser;
  }

}

export default AuthService;

export function authenticate(accessLevel: string) {
  return (req: Request, res: Response, next: NextFunction) => {
    if (req.session.user && req.session.user.accessLevel === accessLevel) {
      return next();
    } else {
      return res.status(401).json({ message: 'Não autorizado' });
    }
  };
}