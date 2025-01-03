export interface Transaction {
  id: string;
  type: 'income' | 'expense';
  amount: number;
  category: string; // This should match budget categoryId
  date: string;
  description: string;
}
  
export interface TransactionCreate extends Omit<Transaction, 'id'> {}
  
export interface TransactionFilter {
  type?: 'income' | 'expense';
  category?: string;
  startDate?: string;
  endDate?: string;
}