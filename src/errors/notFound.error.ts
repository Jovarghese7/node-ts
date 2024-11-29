import { BaseError } from './base.error';

export class NotFoundError extends BaseError {
  constructor(resource: string) {
    super('Not found error', `${resource} not found`, 404);
  }
}
