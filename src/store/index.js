import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { expenseSlice } from "./expense/expense-slice";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { loggerMiddlewares } from "./middlewares/logger-middlewares";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["EXPENSE"], //permet de persister uniquement les éléments de ce tableau
  // blacklist:[''] permet de ne pas persister les éléments de ce tableau
};
const rootReducers = combineReducers({
  EXPENSE: expenseSlice.reducer,
});

const persistedReducers = persistReducer(persistConfig, rootReducers);

const store = configureStore({
  reducer: persistedReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).prepend(loggerMiddlewares.middleware),
});

const persistor = persistStore(store);
export { store, persistor };
