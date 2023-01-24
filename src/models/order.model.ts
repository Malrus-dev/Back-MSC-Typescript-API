import { Pool, RowDataPacket } from 'mysql2/promise';
import { IOrder } from '../interfaces/interfaces';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IOrder[]> {
    const [orders] = await this.connection.execute<(IOrder & RowDataPacket)[]>(
      `SELECT o.id, o.user_id as userId, json_arrayagg(p.id) AS productsIds
        FROM Trybesmith.orders AS o INNER JOIN Trybesmith.products as p
        ON o.id = p.order_id GROUP BY o.id`);
    return orders;
  }
}