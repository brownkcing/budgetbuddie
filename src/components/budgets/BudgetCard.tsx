import { Budget } from '@/types/budget.types';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Trash2 } from 'lucide-react';

interface BudgetCardProps {
  budget: Budget;
  onDelete: (id: string) => void;
}

export function BudgetCard({ budget, onDelete }: BudgetCardProps) {
  const progress = (budget.spent / budget.amount) * 100;
  const remaining = budget.amount - budget.spent;

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-sm font-medium">
          {budget.categoryId}
        </CardTitle>
        <button 
          onClick={() => onDelete(budget.id)}
          className="text-red-500 hover:text-red-700"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Spent: ${budget.spent}</span>
            <span>Budget: ${budget.amount}</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full">
            <div 
              className="h-2 bg-blue-600 rounded-full"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
          <div className="text-right text-sm text-gray-500">
            Remaining: ${remaining}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}