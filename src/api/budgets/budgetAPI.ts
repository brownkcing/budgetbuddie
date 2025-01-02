import { Budget, BudgetCreate } from '@/types/budget.types';

const STORAGE_KEY = 'budgets';
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const budgetAPI = {
  async getAll(): Promise<Budget[]> {
    await delay(500);
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  },

  async create(budgetData: BudgetCreate): Promise<Budget> {
    await delay(500);
    
    const newBudget: Budget = {
      ...budgetData,
      id: crypto.randomUUID(),
      spent: 0
    };

    const budgets = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    budgets.push(newBudget);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(budgets));
    
    return newBudget;
  },

  async delete(id: string): Promise<void> {
    await delay(500);
    
    const budgets = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    const filtered = budgets.filter((b: Budget) => b.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
  },

  async updateSpent(id: string, amount: number): Promise<Budget> {
    await delay(500);
    
    const budgets: Budget[] = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    const index = budgets.findIndex(budget => budget.id === id);
    
    if (index === -1) throw new Error('Budget not found');
    
    budgets[index].spent += amount;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(budgets));
    
    return budgets[index];
  }
};