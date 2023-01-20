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
  CONFLICT = 409,
}

export interface IResponse {
  statusCode: StatusCode,
}