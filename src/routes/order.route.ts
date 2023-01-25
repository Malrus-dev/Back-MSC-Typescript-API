import { Router } from 'express';
import OrderControllers from '../controllers/order.controller';
import { Ids, UserAcc } from '../middlewares/validadeInputs';

const orderControllers = new OrderControllers();

const orders = Router();

orders.get('/', orderControllers.getAll);
orders.post('/', UserAcc, Ids, orderControllers.create);

export default orders;