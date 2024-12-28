import { Card, CardHeader, CardTitle, CardContent } from '../ui/card'

interface BudgetSummaryProps {
  totalBudget: number
  totalSpent: number
  totalRemaining: number
}

export function BudgetSummary({ totalBudget, totalSpent, totalRemaining }: BudgetSummaryProps) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">Total Budget</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">${totalBudget.toLocaleString()}</div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-red-600">${totalSpent.toLocaleString()}</div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">Remaining</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-green-600">${totalRemaining.toLocaleString()}</div>
        </CardContent>
      </Card>
    </div>
  )
}