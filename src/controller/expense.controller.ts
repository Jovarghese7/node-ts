import { Request, Response } from 'express';

export class ExpenseController {
  public getExpenses(req: Request, res: Response) {
    res.send('List of expenses');
  }

  public createExpense(req: Request, res: Response) {
    res.send('expense created');
  }
}
