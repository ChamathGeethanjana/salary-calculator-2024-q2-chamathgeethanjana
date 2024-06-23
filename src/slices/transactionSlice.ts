import { RootState } from "@/store";
import { Transaction } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface TransactionState {
  transactions: Transaction[];
}

const initialState: TransactionState = {
  transactions: [],
};

export const transactionSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    addTransaction: (state, action: PayloadAction<Transaction>) => {
      state.transactions.push(action.payload);
    },
    removeTransaction: (state, action: PayloadAction<Transaction>) => {
      state.transactions = state.transactions.filter(
        (transaction) => transaction.id !== action.payload.id
      );
    },
    updateTransaction: (state, action: PayloadAction<Transaction>) => {
      const index = state.transactions.findIndex(
        (transaction) => transaction.id === action.payload.id
      );
      if (index !== -1) {
        state.transactions[index] = action.payload;
      }
    },
  },
});

export const { addTransaction, removeTransaction, updateTransaction } =
  transactionSlice.actions;

export const selectTransactions = (state: RootState) =>
  state.transactions.transactions;

export const selectEarnings = (state: RootState) =>
  state.transactions.transactions.filter(
    (transaction) => transaction.type === "earning"
  );

export const selectDeductions = (state: RootState) =>
  state.transactions.transactions.filter(
    (transaction) => transaction.type === "deduction"
  );

export default transactionSlice.reducer;
