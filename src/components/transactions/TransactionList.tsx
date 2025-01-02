import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/useAppDispatch';
import { fetchTransactions, deleteTransaction } from '@/store/features/transactions/transactionSlice';
import { TransactionCard } from './TransactionCard';

export function TransactionList() {
  const dispatch = useAppDispatch();
  const transactions = useAppSelector((state) => state.transactions.items);
  const isLoading = useAppSelector((state) => state.transactions.isLoading);

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  const handleDelete = (id: string) => {
    dispatch(deleteTransaction(id));
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-4">
      {transactions.map((transaction) => (
        <TransactionCard 
          key={transaction.id} 
          transaction={transaction} 
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}