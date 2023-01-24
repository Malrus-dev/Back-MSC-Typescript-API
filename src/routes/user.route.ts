import { Router } from 'express';
import UserController from '../controllers/user.controller';
import { validatePassword, validateUsename } from '../middlewares/validadeInputs';

const users = Router();
const controller = new UserController();

users.post('/', validateUsename, validatePassword, controller.create);

export default users;