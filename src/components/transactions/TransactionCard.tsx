import React from 'react';
import { Transaction } from '@/types/transaction.types';
import { Card, CardContent } from '@/components/ui/card';
import { Trash2 } from 'lucide-react';

interface TransactionCardProps {
  transaction: Transaction;
  onDelete: (id: string) => void;
}

export function TransactionCard({ transaction, onDelete }: TransactionCardProps) {
  const isExpense = transaction.type === 'expense';
  
  return (
    <Card>
      <CardContent className="flex items-center justify-between p-4">
        <div>
          <div className="font-medium">{transaction.category}</div>
          <div className="text-sm text-gray-500">{transaction.date}</div>
          {transaction.description && (
            <div className="text-sm text-gray-500">{transaction.description}</div>
          )}
        </div>
        <div className="flex items-center gap-4">
          <span className={`font-medium ${isExpense ? 'text-red-600' : 'text-green-600'}`}>
            {isExpense ? '-' : '+'}${transaction.amount.toLocaleString()}
          </span>
          <button
            onClick={() => onDelete(transaction.id)}
            className="text-red-500 hover:text-red-700"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </CardContent>
    </Card>
  );
}