import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Transaction, TransactionCreate } from '@/types/transaction.types';
import { transactionAPI } from '@/api/transactions/transactionAPI';

interface TransactionState {
  items: Transaction[];
  isLoading: boolean;
  error: string | null;
}

const initialState: TransactionState = {
  items: [],
  isLoading: false,
  error: null
};

export const fetchTransactions = createAsyncThunk(
  'transactions/fetchAll',
  async () => {
    return await transactionAPI.getAll();
  }
);

export const createTransaction = createAsyncThunk(
  'transactions/create',
  async (transaction: TransactionCreate) => {
    return await transactionAPI.create(transaction);
  }
);

export const deleteTransaction = createAsyncThunk(
  'transactions/delete',
  async (id: string) => {
    await transactionAPI.delete(id);
    return id;
  }
);

const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(createTransaction.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteTransaction.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload);
      });
  }
});

export default transactionSlice.reducer;