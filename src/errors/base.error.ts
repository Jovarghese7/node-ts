export class BaseError extends Error {
  public statusCode: number;
  public readonly code?: string;
  constructor(
    name: string,
    message: string,
    statusCode: number,
    code?: string
  ) {
    super(message);
    this.name = name;
    this.statusCode = statusCode;
    this.code = code;
    Object.setPrototypeOf(this, new.target.prototype);
    Error.captureStackTrace(this, this.constructor);
  }
}
