import { Budget } from '@/types/budget.types';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { PiggyBank, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BudgetCardProps {
  budget: Budget;
  onDelete: (id: string) => void;
}

export function BudgetCard({ budget, onDelete }: BudgetCardProps) {
  const progress = (budget.spent / budget.amount) * 100;
  const remaining = budget.amount - budget.spent;

  return (
    <Card className="hover:scale-[1.01] transition-transform">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-blue-100 rounded-lg">
            <PiggyBank className="h-4 w-4 text-blue-600" />
          </div>
          <CardTitle className="font-medium">{budget.categoryId}</CardTitle>
        </div>
        <Button variant="ghost" onClick={() => onDelete(budget.id)} className="text-gray-400 hover:text-red-600">
          <Trash2 className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Spent: <span className="text-red-600 font-medium">${budget.spent}</span></span>
            <span className="text-gray-500">Budget: <span className="text-blue-600 font-medium">${budget.amount}</span></span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-blue-600 rounded-full transition-all"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
          <div className="text-right text-sm text-gray-500">
            Remaining: <span className="text-green-600 font-medium">${remaining}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}