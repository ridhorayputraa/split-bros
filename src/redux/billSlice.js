import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  expenses: 0,
  history: [],
};

const billSlice = createSlice({
  name: "bill",
  initialState,
  reducers: {
    addExpense: (state, action) => {
      console.log("Before adding, expenses:", state.expenses);
      console.log("Adding amount:", action.payload.amount);

      // Tambahkan historyItem ke dalam history
      state.history.push(action.payload.historyItem);

      // Hitung total expenses dengan menjumlahkan amount dari setiap historyItem
      state.expenses = state.history.reduce(
        (total, item) => total + item.amount,
        0
      );

      console.log("After adding, expenses:", state.expenses);
    },

    setTotalExpense: (state, action) => {
      state.expenses = action.payload; // Menyimpan total expense
    },
  },
});

export const { addExpense, setTotalExpense } = billSlice.actions;
export default billSlice.reducer;
