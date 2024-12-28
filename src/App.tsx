import { Dashboard } from '@/components/dashboard/Dashboard'
import { BudgetSummary } from '@/components/budget/BudgetSummary'

function App() {
  return (
    <div className="container mx-auto p-4">
      <BudgetSummary 
        totalBudget={5000}
        totalSpent={3250}
        totalRemaining={1750}
      />
      <div className="mt-8">
        <Dashboard />
      </div>
    </div>
  )
}

export default App