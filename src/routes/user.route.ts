import { Router } from 'express';
import UserController from '../controllers/user.controller';
import { validatePassword, validateUsename } from '../middlewares/validadeInputs';

const users = Router();
const controller = new UserController();

users.post('/users', validateUsename, validatePassword, controller.create);
users.post('/login', validateUsename, validatePassword, controller.login);

export default users;