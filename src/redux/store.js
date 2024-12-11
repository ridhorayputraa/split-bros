import { configureStore } from "@reduxjs/toolkit";
import billReducer from "./billSlice"; // Path menuju slice Redux Anda

const store = configureStore({
  reducer: {
    bill: billReducer, // Pastikan reducer ini sesuai dengan slice Anda
  },
});

export default store;
