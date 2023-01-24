import { Router } from 'express';
import OrderControllers from '../controllers/order.controller';

const orderControllers = new OrderControllers();

const orders = Router();

orders.get('/', orderControllers.getAll);

export default orders;