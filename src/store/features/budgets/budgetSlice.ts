import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Budget, BudgetCreate } from '@/types/budget.types';
import { budgetAPI } from '@/api/budgets/budgetAPI';
import { RootState } from '@/store';

interface BudgetState {
  items: Budget[];
  isLoading: boolean;
  error: string | null;
}

const initialState: BudgetState = {
  items: [],
  isLoading: false,
  error: null
};

export const fetchBudgets = createAsyncThunk(
  'budgets/fetchAll',
  async () => {
    return await budgetAPI.getAll();
  }
);

export const createBudget = createAsyncThunk(
  'budgets/create',
  async (budget: BudgetCreate) => {
    return await budgetAPI.create(budget);
  }
);

export const deleteBudget = createAsyncThunk(
  'budgets/delete',
  async (id: string) => {
    await budgetAPI.delete(id);
    return id;
  }
);

export const updateBudgetSpent = createAsyncThunk(
  'budgets/updateSpent',
  async ({ id, amount }: { id: string; amount: number }, { getState }) => {
    const budgets = (getState() as RootState).budgets.items;
    const budget = budgets.find(b => b.id === id);
    if (!budget) throw new Error('Budget not found');

    return await budgetAPI.updateSpent(id, amount);
  }
);

const budgetSlice = createSlice({
  name: 'budgets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBudgets.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBudgets.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(createBudget.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteBudget.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload);
      }) 
      .addCase(updateBudgetSpent.fulfilled, (state, action) => {
        const index = state.items.findIndex(item => item.id === action.payload.id);
        if (index !== -1) {
          state.items[index].spent = action.payload.spent;
      }
    });
  }
});

export default budgetSlice.reducer;