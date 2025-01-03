import { useAppSelector } from '@/hooks/useAppDispatch';
import { Card, CardContent } from '@/components/ui/card';

// src/components/budgets/BudgetSummary.tsx
export function BudgetSummary() {
  const budgets = useAppSelector((state) => state.budgets.items);
  const transactions = useAppSelector((state) => 
    state.transactions.items.filter(t => t.type === 'expense')
  );

  const totalBudget = budgets.reduce((sum, b) => sum + b.amount, 0);
  const budgetedExpenses = transactions
    .filter(t => budgets.some(b => b.categoryId === t.category))
    .reduce((sum, t) => sum + t.amount, 0);

  const remainingBudget = totalBudget - budgetedExpenses;

  return (
    <Card className="bg-gradient-to-r from-blue-50 to-blue-100/50">
      <CardContent className="grid gap-4 md:grid-cols-3 p-6">
        <div>
          <p className="text-sm font-medium text-gray-500">Budget Limit</p>
          <p className="text-2xl font-bold text-blue-600">${totalBudget.toLocaleString()}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500">Budgeted Expenses</p>
          <p className="text-2xl font-bold text-red-600">${budgetedExpenses.toLocaleString()}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500">Remaining Budget</p>
          <p className="text-2xl font-bold text-green-600">${remainingBudget.toLocaleString()}</p>
        </div>
      </CardContent>
    </Card>
  );
}