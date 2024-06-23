import { RootState } from "@/store";
import { Transaction } from "@/types";
import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";

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
    resetTransactions: (state) => {
      state.transactions = [];
    },
  },
});

export const {
  addTransaction,
  removeTransaction,
  updateTransaction,
  resetTransactions,
} = transactionSlice.actions;

export const selectTransactions = (state: RootState) =>
  state.transactions.transactions;

export const selectEarnings = createSelector(
  selectTransactions,
  (transactions) =>
    transactions.filter((transaction) => transaction.type === "earning")
);

export const selectDeductions = createSelector(
  selectTransactions,
  (transactions) =>
    transactions.filter((transaction) => transaction.type === "deduction")
);

export const selectTotalEarnings = createSelector(selectEarnings, (earnings) =>
  earnings.reduce((acc, transaction) => acc + transaction.amount, 0)
);

export const selectTotalDeductions = createSelector(
  selectDeductions,
  (deductions) =>
    deductions.reduce((acc, transaction) => acc + transaction.amount, 0)
);

export const selectTotalAllowedEPFandETP = createSelector(
  selectEarnings,
  (earnings) =>
    earnings
      .filter((transaction) => transaction.isEPFandETP)
      .reduce((acc, transaction) => acc + transaction.amount, 0)
);

export default transactionSlice.reducer;
