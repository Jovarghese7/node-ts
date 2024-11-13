import { Router } from 'express';
import { UserController } from '../controller/user.controller';

const router = Router();

const userController = new UserController();

router.get('/', userController.getUser.bind(userController));
router.post('/', userController.createUser.bind(userController));

export default router;
