import { createSlice } from "@reduxjs/toolkit";

export const expenseSlice = createSlice({
  name: "expenseSlice",
  initialState: {
    income: 1000,
    expenseList: [],
    countActionPerformed: 0,
  },

  reducers: {
    addExpense: (currentSlice, action) => {
      currentSlice.expenseList.push({
        ...action.payload,
        price: Number.parseFloat(action.payload.price),
      });
    },
    setIncome: (currentSlice, action) => {
      currentSlice.income = Number.parseFloat(action.payload);
    },
    incrementCountAction: (currentSlice, action) => {
      currentSlice.countActionPerformed++;
    },
  },
});

const { addExpense, setIncome, incrementCountAction } = expenseSlice.actions;

export { addExpense, setIncome, incrementCountAction };
