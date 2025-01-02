import { Transaction, TransactionCreate, TransactionFilter } from '@/types/transaction.types';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const transactionAPI = {
  async getAll(filter?: TransactionFilter): Promise<Transaction[]> {
    await delay(500);
    const transactions = JSON.parse(localStorage.getItem('transactions') || '[]');
    if (!filter) return transactions;
    // Filter logic here
    return transactions;
  },

  async create(transaction: TransactionCreate): Promise<Transaction> {
    await delay(500);
    const newTransaction = {
      ...transaction,
      id: crypto.randomUUID()
    };
    const transactions = JSON.parse(localStorage.getItem('transactions') || '[]');
    transactions.push(newTransaction);
    localStorage.setItem('transactions', JSON.stringify(transactions));
    return newTransaction;
  },

  async delete(id: string): Promise<void> {
    await delay(500);
    const transactions = JSON.parse(localStorage.getItem('transactions') || '[]');
    const filtered = transactions.filter((t: Transaction) => t.id !== id);
    localStorage.setItem('transactions', JSON.stringify(filtered));
  }
};