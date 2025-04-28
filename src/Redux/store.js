import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";
import { apiSlice } from "./feature/api/apiSlice";


const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};
const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
        ignoredActionPaths: ["register", "rehydrate"],
      },
    }).concat(apiSlice.middleware),
});

export const parsistor = persistStore(store);