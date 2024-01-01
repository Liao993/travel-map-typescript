import { configureStore } from "@reduxjs/toolkit";
import pinReducer from "./pinSlice";

export const store = configureStore({
  reducer: {
    pinReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
