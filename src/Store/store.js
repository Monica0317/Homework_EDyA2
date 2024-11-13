import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from '../Features/counterSlice';
import { pokemonApi } from '../Features/pokemonSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});