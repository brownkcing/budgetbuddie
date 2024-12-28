
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { ArrowUp, ArrowDown, DollarSign } from 'lucide-react'

interface ExpenseData {
  amount: number
  category: string
  date: string
}

const recentExpenses: ExpenseData[] = [
  { amount: 120, category: 'Groceries', date: '2024-12-26' },
  { amount: 45, category: 'Transport', date: '2024-12-25' },
  { amount: 200, category: 'Utilities', date: '2024-12-24' },
]

export function Dashboard() {
  const totalIncome = 5000
  const totalExpenses = recentExpenses.reduce((sum, exp) => sum + exp.amount, 0)
  const balance = totalIncome - totalExpenses

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Financial Overview</h1>
      
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Income</CardTitle>
            <ArrowUp className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              ${totalIncome.toLocaleString()}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Expenses</CardTitle>
            <ArrowDown className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">
              ${totalExpenses.toLocaleString()}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Balance</CardTitle>
            <DollarSign className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">
              ${balance.toLocaleString()}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Expenses</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {recentExpenses.map((expense, i) => (
              <div key={i} className="flex justify-between items-center p-2 hover:bg-gray-50 rounded">
                <div>
                  <div className="font-medium">{expense.category}</div>
                  <div className="text-sm text-gray-500">{expense.date}</div>
                </div>
                <div className="font-medium text-red-600">
                  -${expense.amount}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}