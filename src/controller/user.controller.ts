import { Request, Response } from 'express';
import { UserService } from '../services/user.service';

export class UserController {
  public getUser(req: Request, res: Response) {
    const users =  new UserService().getAllUsers();
    

  }

  public createUser(req: Request, res: Response) {
    res.send('user created');
  }
}
