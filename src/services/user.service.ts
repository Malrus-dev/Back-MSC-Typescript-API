import jwt from 'jsonwebtoken';
import UserModel from '../models/user.model';
import connection from '../models/connection';
import { IToken, IUser } from '../interfaces/interfaces';

const secret = process.env.JWT_SECRET;

class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async create(input: IUser): Promise<IToken> {  
    const newUser = await this.model.create(input);
    const token = jwt.sign({ data: { newUser } }, secret as string);
    return { token };
  }
}

export default UserService;