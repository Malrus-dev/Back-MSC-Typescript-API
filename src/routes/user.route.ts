import { Router } from 'express';
import UserController from '../controllers/user.controller';
import { Level, Password, Username, Vocation } from '../middlewares/validadeInputs';

const users = Router();
const controller = new UserController();

users.post('/users', Username, Password, Vocation, Level, controller.create);
users.post('/login', Username, Password, controller.login);

export default users;