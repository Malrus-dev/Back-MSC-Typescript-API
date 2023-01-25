import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { Idecoded, StatusCode } from '../interfaces/interfaces';

const secret = process.env.JWT_SECRET;

export const ProductName = async (req: Request, res: Response, next: NextFunction)
: Promise<void | Response> => {
  const { name } = req.body;
  if (!name) {
    return res.status(StatusCode.BAD_REQUEST).json({ message: '"name" is required' });
  }
  if (typeof name !== 'string') {
    return res.status(StatusCode.UNPROCESSABLE).json({ message: '"name" must be a string' });
  }
  if (name.length < 3) {
    return res.status(StatusCode.UNPROCESSABLE).json(
      { message: '"name" length must be at least 3 characters long' },
    );
  }

  next();
};

export const ProductAmount = async (req: Request, res: Response, next: NextFunction)
: Promise<void | Response> => {
  const { amount } = req.body;
  if (!amount) {
    return res.status(StatusCode.BAD_REQUEST).json({ message: '"amount" is required' });
  }
  if (typeof amount !== 'string') {
    return res.status(StatusCode.UNPROCESSABLE).json({ message: '"amount" must be a string' });
  }
  if (amount.length < 3) {
    return res.status(StatusCode.UNPROCESSABLE).json(
      { message: '"amount" length must be at least 3 characters long' },
    );
  }

  next();
};

export const Username = async (req: Request, res: Response, next: NextFunction)
: Promise<void | Response> => {
  const { username } = req.body;
  if (!username) {
    return res.status(StatusCode.BAD_REQUEST).json({ message: '"username" is required' });
  }
  if (typeof username !== 'string') {
    return res.status(StatusCode.UNPROCESSABLE).json({ message: '"username" must be a string' });
  }
  if (username.length < 3) {
    return res.status(StatusCode.UNPROCESSABLE).json(
      { message: '"username" length must be at least 3 characters long' },
    );
  }

  next();
};

export const Password = async (req: Request, res: Response, next: NextFunction)
: Promise<void | Response> => {
  const { password } = req.body;
  if (!password) {
    return res.status(StatusCode.BAD_REQUEST).json({ message: '"password" is required' });
  }
  if (typeof password !== 'string') {
    return res.status(StatusCode.UNPROCESSABLE).json({ message: '"password" must be a string' });
  }
  if (password.length < 8) {
    return res.status(StatusCode.UNPROCESSABLE).json(
      { message: '"password" length must be at least 8 characters long' },
    );
  }

  next();
};

export const Vocation = async (req: Request, res: Response, next: NextFunction)
: Promise<void | Response> => {
  const { vocation } = req.body;
  if (!vocation) {
    return res.status(StatusCode.BAD_REQUEST).json({ message: '"vocation" is required' });
  }
  if (typeof vocation !== 'string') {
    return res.status(StatusCode.UNPROCESSABLE).json({ message: '"vocation" must be a string' });
  }
  if (vocation.length < 3) {
    return res.status(StatusCode.UNPROCESSABLE).json(
      { message: '"vocation" length must be at least 3 characters long' },
    );
  }

  next();
};

export const Level = async (req: Request, res: Response, next: NextFunction)
: Promise<void | Response> => {
  const { level } = req.body;
  if (level === null || level === undefined) {
    return res.status(StatusCode.BAD_REQUEST).json({ message: '"level" is required' });
  }
  if (typeof level !== 'number') {
    return res.status(StatusCode.UNPROCESSABLE).json({ message: '"level" must be a number' });
  }
  if (level < 1) {
    return res.status(StatusCode.UNPROCESSABLE).json(
      { message: '"level" must be greater than or equal to 1' },
    );
  }

  next();
};

export const Ids = async (req: Request, res: Response, next: NextFunction)
: Promise<void | Response> => {
  const { productsIds } = req.body;
  if (!productsIds) {
    return res.status(StatusCode.BAD_REQUEST).json({ message: '"productsIds" is required' });
  }
  if (typeof productsIds !== 'object') {
    return res.status(StatusCode.UNPROCESSABLE).json(
      { message: '"productsIds" must be an array' },
    );
  }
  if (productsIds.length < 1) {
    return res.status(StatusCode.UNPROCESSABLE).json(
      { message: '"productsIds" must include only numbers' },
    );
  }
  next();
};

export const UserAcc = async (req: Request, res: Response, next: NextFunction)
: Promise<void | Response> => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(StatusCode.UNAUTHORIZED).json({ message: 'Token not found' });
  }
  try {
    const decoded = jwt.verify(token as string, secret as string) as Idecoded;
    req.body.userId = decoded.data.userId;
    next();
  } catch (error) {
    console.log(error);    
    return res.status(StatusCode.UNAUTHORIZED).json({ message: 'Invalid token' });
  }
};