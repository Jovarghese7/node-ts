import { NotFoundError } from '../errors/notFound.error';
import prisma from '../prisma/prisma.service';
export class UserService {
  async getAllUsers() {
    try {
      const users = await prisma.user.findMany();
      if (!users) throw new NotFoundError('Users not found on database');
      return users;
    } catch (error) {
      throw new NotFoundError('cant get users');
    }
  }
}
