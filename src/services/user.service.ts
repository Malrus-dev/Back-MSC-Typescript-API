import jwt from 'jsonwebtoken';
import UserModel from '../models/user.model';
import connection from '../models/connection';
import { ILoginResponse, IToken, IUser, StatusCode } from '../interfaces/interfaces';

const secret = process.env.JWT_SECRET;

class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async create(input: IUser): Promise<IToken> {  
    const newUser = await this.model.create(input);
    const token = jwt.sign({ data: { userId: newUser.id } }, secret as string);
    return { token };
  }

  public async login(username: string, password: string): Promise<ILoginResponse> {
    const user = await this.model.findOne(username, password);
    if (!user) {
      return { statusCode: StatusCode.UNAUTHORIZED, message: 'Username or password invalid' };
    }
    const token = jwt.sign({ data: { userId: user.id } }, secret as string);
    return { statusCode: StatusCode.OK, message: { token } };
  }
}
export default UserService;