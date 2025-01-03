import { useAppSelector } from '@/hooks/useAppDispatch';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ArrowUp, ArrowDown, Wallet, Target } from 'lucide-react';

export function DashboardSummary() {
    const transactions = useAppSelector((state) => state.transactions.items);
    const budgets = useAppSelector((state) => state.budgets.items);
  
    const totalIncome = transactions
      .filter(t => t.type === 'income')
      .reduce((sum, t) => sum + t.amount, 0);
  
    const totalExpenses = transactions
      .filter(t => t.type === 'expense')
      .reduce((sum, t) => sum + t.amount, 0);
  
    const totalBudget = budgets.reduce((sum, b) => sum + b.amount, 0);
    const cashBalance = totalIncome - totalExpenses;
  
    return (
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="bg-gradient-to-br from-green-50 to-green-100/50">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Income</CardTitle>
            <div className="p-2 bg-green-100 rounded-lg">
              <ArrowUp className="h-4 w-4 text-green-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              ${totalIncome.toLocaleString()}
            </div>
          </CardContent>
        </Card>
  
        <Card className="bg-gradient-to-br from-red-50 to-red-100/50">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Expenses</CardTitle>
            <div className="p-2 bg-red-100 rounded-lg">
              <ArrowDown className="h-4 w-4 text-red-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">
              ${totalExpenses.toLocaleString()}
            </div>
          </CardContent>
        </Card>
  
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100/50">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Budget Limit</CardTitle>
            <div className="p-2 bg-blue-100 rounded-lg">
              <Target className="h-4 w-4 text-blue-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">
              ${totalBudget.toLocaleString()}
            </div>
          </CardContent>
        </Card>
  
        <Card className="bg-gradient-to-br from-purple-50 to-purple-100/50">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Cash Balance</CardTitle>
            <div className="p-2 bg-purple-100 rounded-lg">
              <Wallet className="h-4 w-4 text-purple-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">
              ${cashBalance.toLocaleString()}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }