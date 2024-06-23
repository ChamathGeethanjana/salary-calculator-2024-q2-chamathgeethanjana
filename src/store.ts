import { configureStore } from "@reduxjs/toolkit";
import transactionSlice from "@/slices/transactionSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      transactions: transactionSlice,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
