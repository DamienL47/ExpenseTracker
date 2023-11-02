import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import {
  addExpense,
  incrementCountAction,
  setIncome,
} from "store/expense/expense-slice";

export const loggerMiddlewares = createListenerMiddleware();

loggerMiddlewares.startListening({
  //   predicate: (action) => {
  //     return action.type === "expenseSlice/addExpense";
  //   },
  matcher: isAnyOf(addExpense, setIncome),
  effect: async (action, listenerApi) => {
    console.log(action);
    listenerApi.dispatch(incrementCountAction());
    console.log(listenerApi.getState());
  },
});
