import { Provider } from 'react-redux';
import { store } from '@/store';
import { BudgetSummary } from '@/components/budgets/BudgetSummary';
import { SetBudget } from '@/components/budgets/SetBudget';
import { BudgetList } from '@/components/budgets/BudgetList';

function App() {
  return (
    <Provider store={store}>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6">BudgetBuddie</h1>
        
        <div className="space-y-6">
          <SetBudget />
          <BudgetSummary />
          <BudgetList />
        </div>
      </div>
    </Provider>
  );
}

export default App;