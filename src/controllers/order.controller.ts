import { Request, Response } from 'express';
import OrderService from '../services/order.service';

export default class OrderController {
  constructor(private orderService = new OrderService()) { }

  public getAll = async (_req: Request, res: Response): Promise<void> => {
    const orders = await this.orderService.getAll();
    res.status(200).json(orders);
  };

  public create = async (req: Request, res: Response): Promise<void> => {
    const { userId, productsIds } = req.body;
    const { statusCode, message } = await this.orderService.create(userId, productsIds);
    res.status(statusCode).json(message);
  };
}