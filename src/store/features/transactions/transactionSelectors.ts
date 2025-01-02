import { RootState } from '@/store';

export const selectTransactions = (state: RootState) => state.transactions.items;
export const selectIsLoading = (state: RootState) => state.transactions.isLoading;
export const selectError = (state: RootState) => state.transactions.error;

export const selectTotalIncome = (state: RootState) => 
  state.transactions.items
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);

export const selectTotalExpenses = (state: RootState) => 
  state.transactions.items
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);