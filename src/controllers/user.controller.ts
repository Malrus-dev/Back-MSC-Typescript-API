import { Request, Response } from 'express';
import { StatusCode } from '../interfaces/interfaces';
import UserService from '../services/user.service';

class UserController {
  constructor(private userService = new UserService()) { }

  public create = async (req: Request, res: Response): Promise<void> => {
    const msgUser = req.body;
    const token = await this.userService.create(msgUser);
    res.status(StatusCode.CREATED).json(token);
  };

  public login = async (req: Request, res: Response): Promise<Response> => {
    const { username, password } = req.body;
    const { statusCode, message } = await this.userService.login(username, password);
    if (statusCode !== 200) {
      return res.status(statusCode).json({ message });
    }
    return res.status(statusCode).json(message);
  };
}

export default UserController;