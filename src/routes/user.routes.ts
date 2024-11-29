import { Router } from 'express';
import { UserController } from '../controller/user.controller';
import { asyncHandler } from '../utils/asyncHandler.utils';

const router = Router();

const userController = new UserController();

router.get('/', asyncHandler(userController.getUser.bind(userController)));
router.post('/', asyncHandler(userController.createUser.bind(userController)));

export default router;
