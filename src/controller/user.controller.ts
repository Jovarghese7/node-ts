import { NextFunction, Request, Response } from 'express';
import { UserService } from '../services/user.service';
import { NotFoundError } from '../errors/notFound.error';

export class UserController {
  public async getUser(req: Request, res: Response, next: NextFunction) {
    try {
      const users = new UserService().getAllUsers();
      return users;
    } catch (error) {
      next(error);
    }
  }

  public async createUser(req: Request, res: Response) {
    res.send('user created');
  }
}
