export interface Budget {
    id: string;
    categoryId: string;
    amount: number;
    spent: number;
    period: 'monthly' | 'weekly';
    startDate: string;
    endDate: string;
  }
  
  export interface BudgetCreate extends Omit<Budget, 'id' | 'spent'> {}