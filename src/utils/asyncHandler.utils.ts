import { Request, Response, NextFunction } from 'express';

/**
 * Wraps an async function to handle errors and forward them to the next middleware.
 * @param fn - The async route handler function
 * @returns A function compatible with Express
 */
export const asyncHandler =
  (fn: (req: Request, res: Response, next: NextFunction) => Promise<any>) =>
  (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
