import { Router } from 'express';
import { ExpenseController } from '../controller/expense.controller';

const router = Router();

const expenseController = new ExpenseController();

router.get('/', expenseController.getExpenses.bind(expenseController));
router.post('/', expenseController.createExpense.bind(expenseController));

export default router;
