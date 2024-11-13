import { Request } from 'express';
import prisma from '../prisma/prisma.service';
export class UserService {
  async getAllUsers() {
    try {
      const users = await prisma.user.findMany();
      return users;
    } catch (error) {
      throw new Error('cant get users')
    }
  }
}