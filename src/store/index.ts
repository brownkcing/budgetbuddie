import { configureStore } from '@reduxjs/toolkit';
import transactionReducer from './features/transactions/transactionSlice';
import budgetReducer from './features/budgets/budgetSlice';

export const store = configureStore({
  reducer: {
    transactions: transactionReducer,
    budgets: budgetReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;