import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "../features/today/todaySlice";
export const store = configureStore({
  reducer: {
    weathers: weatherReducer,
  }
});

export default store;