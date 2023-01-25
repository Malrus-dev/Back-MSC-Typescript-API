export interface IProduct {
  id?: number,
  name: string,
  amount: string,
}

export enum StatusCode {
  OK = 200,
  NOT_FOUND = 404,
  CREATED = 201,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NO_CONTENT = 204,
  UNPROCESSABLE = 422,
  INTERNAL_ERROR = 500,
}

export interface IResponse {
  statusCode: StatusCode,
}

export interface IUser {
  id?: number,
  username: string,
  vocation: string,
  level: number,
  password: string,
}

export interface IToken {
  token: string,
}

export interface IOrder {
  id?: number,
  userId: number,
  productsIds: number[]
}