import dotenv from 'dotenv';
import express, { NextFunction, Request, Response } from 'express';
import userRoutes from './routes/user.routes';
import expenseRoutes from './routes/expense.routes';
import { BaseError } from './errors/base.error';

const app = express();
dotenv.config();

const PORT = process.env.PORT;
app.use(express.json());

app.use('/api/user', userRoutes);
app.use('/api/expense', expenseRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack || 'No stack available');
  if (err instanceof BaseError) {
    res.status(err.statusCode || 500).json({
      name: err.name || 'InternalServerError',
      message: err.message || 'An unexpected error occurred',
    });
  }
});

app.listen(PORT, (): void => {
  console.log(`Server listening on port :${PORT}`);
});
