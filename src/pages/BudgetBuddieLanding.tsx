import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

export function BudgetBuddieLanding() {
  const navigate = useNavigate();
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="container mx-auto px-6 py-20">
          <div className="text-center space-y-8">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              BudgetBuddie
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Smart personal finance management made simple. Track expenses, set budgets, and achieve your financial goals.
            </p>
            <Button 
              size="lg"
              className="bg-blue-600 hover:bg-blue-700"
              onClick={() => navigate('/dashboard')}
            >
              Launch App
            </Button>
          </div>
        </div>
      </div>
    );
  }