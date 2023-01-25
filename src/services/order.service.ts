import { IOrder, IUserOrdersResponse } from '../interfaces/interfaces';
import connection from '../models/connection';
import OrderModel from '../models/order.model';

class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public async getAll(): Promise<IOrder[]> {
    const orders = await this.model.getAll();
    return orders;
  }

  public async create(userId: number, productsIds: number[]): Promise<IUserOrdersResponse> {
    const userOrders = await this.model.create(userId, productsIds);
    return { statusCode: 201, message: userOrders };
  }
}

export default OrderService;
