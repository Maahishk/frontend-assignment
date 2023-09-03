import { configureStore } from "@reduxjs/toolkit";
// Import your reducers
import Reducer from "./searchSlice";
export const store = configureStore({
  reducer: {
    Reducer,
    // Add more reducers as needed
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
