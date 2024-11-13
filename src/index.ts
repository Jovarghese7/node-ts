import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import userRoutes from './routes/user.routes';
import expenseRoutes from './routes/expense.routes';

const app = express();
dotenv.config();

const PORT = process.env.PORT;
app.use(express.json());

app.use('/api/user', userRoutes);
app.use('/api/expense', expenseRoutes);

app.listen(PORT, (): void => {
  console.log(`Server listening on port :${PORT}`);
});
