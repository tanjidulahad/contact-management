import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./slices/contactSlice";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: 'tayo',
  storage,
}

const persistedReducer = persistReducer(persistConfig, contactReducer)

export const store = configureStore({
  reducer: persistedReducer,
})

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>;