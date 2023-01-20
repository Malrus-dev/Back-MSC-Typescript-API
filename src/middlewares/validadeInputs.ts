import { Request, Response, NextFunction } from 'express';
import { StatusCode } from '../interfaces/interfaces';

export const validateProductName = async (
  req: Request, 
  res: Response, 
  next: NextFunction,
): Promise<void | Response> => {
  const { name } = req.body;
  if (!name) {
    return res.status(StatusCode.BAD_REQUEST).json({ message: '"name" is required' });
  }
  if (typeof name !== 'string') {
    return res.status(StatusCode.CONFLICT).json({ message: '"name" must be a string' });
  }
  if (name.length < 1) {
    return res.status(StatusCode.CONFLICT).json(
      { message: '"name" length must be at least 1 characters long' },
    );
  }

  next();
};

export const validateProductAmount = async (
  req: Request, 
  res: Response, 
  next: NextFunction,
): Promise<void | Response> => {
  const { amount } = req.body;
  if (!amount) {
    return res.status(StatusCode.BAD_REQUEST).json({ message: '"amount" is required' });
  }
  if (typeof amount !== 'string') {
    return res.status(StatusCode.CONFLICT).json({ message: '"amount" must be a string' });
  }
  if (amount.length < 1) {
    return res.status(StatusCode.CONFLICT).json(
      { message: '"amount" length must be at least 1 characters long' },
    );
  }

  next();
};