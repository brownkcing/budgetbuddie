import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/useAppDispatch';
import { fetchBudgets, deleteBudget } from '@/store/features/budgets/budgetSlice';
import { BudgetCard } from './BudgetCard';

export function BudgetList() {
  const dispatch = useAppDispatch();
  const budgets = useAppSelector((state) => state.budgets.items);
  const isLoading = useAppSelector((state) => state.budgets.isLoading);

  useEffect(() => {
    dispatch(fetchBudgets());
  }, [dispatch]);

  const handleDelete = (id: string) => {
    dispatch(deleteBudget(id));
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {budgets.map((budget) => (
        <BudgetCard 
          key={budget.id} 
          budget={budget} 
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}