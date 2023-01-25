import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { IUser } from '../interfaces/interfaces';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create({ username, vocation, level, password }: IUser): Promise<IUser> {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.users(username, vocation, level, password) VALUES(?, ?, ?, ?)',
      [username, vocation, level, password],
    );

    return { id: insertId, username, vocation, level, password };
  }

  public async findOne(username: string, password: string): Promise<IUser> {
    const [[user]] = await this.connection.execute<(
    IUser & RowDataPacket)[]>(
      'SELECT id FROM Trybesmith.users WHERE username = ? AND password = ?',
      [username, password],
      );
    return user;
  }
}