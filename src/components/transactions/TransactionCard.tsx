import { Transaction } from '@/types/transaction.types';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowDown, ArrowUp, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TransactionCardProps {
  transaction: Transaction;
  onDelete: (id: string) => void;
}

// src/components/transactions/TransactionCard.tsx
export function TransactionCard({ transaction, onDelete }: TransactionCardProps) {
  const isExpense = transaction.type === 'expense';
  
  return (
    <Card className="hover:scale-[1.01] transition-transform">
      <CardContent className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${isExpense ? 'bg-red-100' : 'bg-green-100'}`}>
            {isExpense ? <ArrowDown className="text-red-600 h-4 w-4" /> : <ArrowUp className="text-green-600 h-4 w-4" />}
          </div>
          <div>
            <div className="font-medium">{transaction.category}</div>
            <div className="text-sm text-gray-500">{transaction.date}</div>
            {transaction.description && (
              <div className="text-sm text-gray-500">{transaction.description}</div>
            )}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className={`font-medium ${isExpense ? 'text-red-600' : 'text-green-600'}`}>
            {isExpense ? '-' : '+'}${transaction.amount.toLocaleString()}
          </span>
          <Button variant="ghost" onClick={() => onDelete(transaction.id)} className="text-gray-400 hover:text-red-600">
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}