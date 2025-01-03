import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/useAppDispatch';
import { createTransaction } from '@/store/features/transactions/transactionSlice';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { updateBudgetSpent } from '@/store/features/budgets/budgetSlice';

export function AddTransaction() {
 const dispatch = useAppDispatch();
 const budgets = useAppSelector(state => state.budgets.items);
 const [open, setOpen] = useState(false);
 const [formData, setFormData] = useState({
   type: 'expense' as const,
   amount: 0,
   category: '',
   date: new Date().toISOString().split('T')[0],
   description: ''
 });

 const categories = budgets.map(b => b.categoryId);

 const handleSubmit = async (e: React.FormEvent) => {
   e.preventDefault();
   await dispatch(createTransaction(formData));
   if (formData.type === 'expense') {
     const matchingBudget = budgets.find(b => b.categoryId === formData.category);
     if (matchingBudget) {
       await dispatch(updateBudgetSpent({
         id: matchingBudget.id,
         amount: formData.amount
       }));
     }
   }

   setFormData({
     type: 'expense',
     amount: 0,
     category: '',
     date: new Date().toISOString().split('T')[0],
     description: ''
   });
   setOpen(false);
 };

 return (
   <Dialog open={open} onOpenChange={setOpen}>
     <DialogTrigger asChild>
       <Button size="lg" className="w-full bg-gradient-to-r from-blue-600 to-blue-500">
         Add Transaction
       </Button>
     </DialogTrigger>
     <DialogContent>
       <DialogHeader>
         <DialogTitle>Add New Transaction</DialogTitle>
       </DialogHeader>
       <form onSubmit={handleSubmit} className="space-y-4">
         <div>
           <label className="text-sm font-medium text-gray-700">Type</label>
           <select
             className="mt-1 w-full rounded-lg border border-gray-200 bg-white/50 p-2.5 focus:border-blue-500 focus:ring-blue-500"
             value={formData.type}
             onChange={(e) => {
               const value = e.target.value;
               if (value === 'income' || value === 'expense') {
                 setFormData({ ...formData, type: value as any });
               }
             }}
             required
           >
             <option value="expense">Expense</option>
             <option value="income">Income</option>
           </select>
         </div>

         <div>
           <label className="text-sm font-medium text-gray-700">Category</label>
           <select
             className="mt-1 w-full rounded-lg border border-gray-200 bg-white/50 p-2.5 focus:border-blue-500 focus:ring-blue-500"
             value={formData.category}
             onChange={(e) => setFormData({ ...formData, category: e.target.value })}
             required
           >
             <option value="">Select a category</option>
             {categories.map(category => (
               <option key={category} value={category}>{category}</option>
             ))}
             <option value="other">Other</option>
           </select>
         </div>

         <div>
           <label className="text-sm font-medium text-gray-700">Amount</label>
           <input
             type="number"
             min="0"
             step="0.01"
             className="mt-1 w-full rounded-lg border border-gray-200 bg-white/50 p-2.5 focus:border-blue-500 focus:ring-blue-500"
             value={formData.amount}
             onChange={(e) => setFormData({ ...formData, amount: Number(e.target.value) })}
             required
           />
         </div>

         <div>
           <label className="text-sm font-medium text-gray-700">Date</label>
           <input
             type="date"
             className="mt-1 w-full rounded-lg border border-gray-200 bg-white/50 p-2.5 focus:border-blue-500 focus:ring-blue-500"
             value={formData.date}
             onChange={(e) => setFormData({ ...formData, date: e.target.value })}
             required
           />
         </div>

         <div>
           <label className="text-sm font-medium text-gray-700">Description</label>
           <textarea
             className="mt-1 w-full rounded-lg border border-gray-200 bg-white/50 p-2.5 focus:border-blue-500 focus:ring-blue-500"
             value={formData.description}
             onChange={(e) => setFormData({ ...formData, description: e.target.value })}
           />
         </div>

         <Button type="submit" className="w-full">Add Transaction</Button>
       </form>
     </DialogContent>
   </Dialog>
 );
}