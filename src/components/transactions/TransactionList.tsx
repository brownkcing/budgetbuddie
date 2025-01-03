import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/useAppDispatch';
import { fetchTransactions, deleteTransaction } from '@/store/features/transactions/transactionSlice';
import { TransactionCard } from './TransactionCard';
import { Card } from '@/components/ui/card';
import { Receipt } from 'lucide-react';

export function TransactionList() {
  const dispatch = useAppDispatch();
  const transactions = useAppSelector((state) => state.transactions.items);
  const isLoading = useAppSelector((state) => state.transactions.isLoading);

  useEffect(() => {
    dispatch(fetchTransactions());
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

  if (transactions.length === 0) {
    return (
      <Card className="p-8">
        <div className="text-center text-gray-500">
          <Receipt className="h-12 w-12 mx-auto mb-3 text-gray-400" />
          <p className="text-lg font-medium">No transactions yet</p>
          <p className="text-sm">Add your first transaction to get started</p>
        </div>
      </Card>
    );
  }

  return (
    <div className="space-y-3">
      {transactions.map((transaction) => (
        <TransactionCard 
          key={transaction.id} 
          transaction={transaction} 
          onDelete={(id) => dispatch(deleteTransaction(id))}
        />
      ))}
    </div>
  );
}