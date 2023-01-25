import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
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

  public async findByOrderId(orderId: number): Promise<IOrder> {
    const [[result]] = await this.connection.execute<(
    IOrder & RowDataPacket)[]>(
      `SELECT o.user_id AS userId, json_arrayagg(p.id) AS productsIds FROM Trybesmith.orders AS o
      INNER JOIN Trybesmith.products as p ON o.id = p.order_id WHERE o.id = ? GROUP BY o.id`,
      [orderId],
      );
    return result;
  }

  public async create(userId: number, productsIds: number[]): Promise<IOrder> {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.orders (user_id) VALUES (?)',
      [userId],
    );
    await Promise.all<void>(productsIds.map(async (productId: number): Promise<void> => {
      await this.connection.execute<ResultSetHeader>(
        'UPDATE Trybesmith.products SET order_id = ? WHERE id = ?',
        [insertId, productId],
      );
    }));
    return this.findByOrderId(insertId);  
  }
}