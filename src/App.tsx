import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '@/store';
import { BudgetBuddieLanding } from '@/pages/BudgetBuddieLanding';
import { Dashboard } from '@/pages/Dashboard'; // Move current App content to this component

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BudgetBuddieLanding />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;