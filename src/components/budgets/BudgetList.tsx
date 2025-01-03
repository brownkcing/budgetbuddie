import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/useAppDispatch';
import { fetchBudgets, deleteBudget } from '@/store/features/budgets/budgetSlice';
import { BudgetCard } from './BudgetCard';
import { Card } from '@/components/ui/card';
import { PiggyBank } from 'lucide-react';

export function BudgetList() {
  const dispatch = useAppDispatch();
  const budgets = useAppSelector((state) => state.budgets.items);
  const isLoading = useAppSelector((state) => state.budgets.isLoading);
 
  useEffect(() => {
    dispatch(fetchBudgets());
  }, [dispatch]);
 
  if (isLoading) {
    return (
      <Card className="p-8">
        <div className="flex justify-center items-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
        </div>
      </Card>
    );
  }
 
  if (budgets.length === 0) {
    return (
      <Card className="p-8">
        <div className="text-center text-gray-500">
          <PiggyBank className="h-12 w-12 mx-auto mb-3 text-gray-400" />
          <p className="text-lg font-medium">No budgets set</p>
          <p className="text-sm">Create your first budget to start tracking</p>
        </div>
      </Card>
    );
  }
 
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {budgets.map((budget) => (
        <BudgetCard 
          key={budget.id} 
          budget={budget} 
          onDelete={(id) => dispatch(deleteBudget(id))}
        />
      ))}
    </div>
  );
 }