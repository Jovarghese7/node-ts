import { BaseError } from './base.error';

export class ValidationError extends BaseError {
  constructor(message: string) {
    super('Validation error', message, 400);
  }
}
