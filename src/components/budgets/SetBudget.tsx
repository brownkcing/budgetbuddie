import React, { useState } from 'react';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { createBudget } from '@/store/features/budgets/budgetSlice';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

export function SetBudget() {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState<any>({
    categoryId: '',
    amount: 0,
    period: 'monthly' as const,
    startDate: new Date().toISOString().split('T')[0],
    endDate: new Date(new Date().setMonth(new Date().getMonth() + 1)).toISOString().split('T')[0]
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.amount <= 0) return;
    
    dispatch(createBudget(formData));
    setFormData({
      categoryId: '',
      amount: 0,
      period: 'monthly',
      startDate: new Date().toISOString().split('T')[0],
      endDate: new Date(new Date().setMonth(new Date().getMonth() + 1)).toISOString().split('T')[0]
    });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className="w-full">Set New Budget</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Set New Budget</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700">Category</label>
            <input
              type="text"
              required
              className="mt-1 w-full rounded-lg border border-gray-200 bg-white/50 p-2.5 focus:border-blue-500 focus:ring-blue-500"
              value={formData.categoryId}
              onChange={(e) => setFormData({ ...formData, categoryId: e.target.value })}
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Amount</label>
            <input
              type="number"
              required
              min="1"
              step="0.01"
              className="mt-1 w-full rounded-lg border border-gray-200 bg-white/50 p-2.5 focus:border-blue-500 focus:ring-blue-500"
              value={formData.amount}
              onChange={(e) => setFormData({ ...formData, amount: parseFloat(e.target.value) || 0 })}
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Start Date</label>
            <input
              type="date"
              required
              className="mt-1 w-full rounded-lg border border-gray-200 bg-white/50 p-2.5 focus:border-blue-500 focus:ring-blue-500"
              value={formData.startDate}
              onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">End Date</label>
            <input
              type="date"
              required
              className="mt-1 w-full rounded-lg border border-gray-200 bg-white/50 p-2.5 focus:border-blue-500 focus:ring-blue-500"
              value={formData.endDate}
              onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
            />
          </div>

          <Button type="submit" className="w-full">Save Budget</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}