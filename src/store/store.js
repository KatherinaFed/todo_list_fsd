import { configureStore } from '@reduxjs/toolkit';
import { todoAPI } from '../services/todoServiceApi';

const store = configureStore({
  reducer: {
    [todoAPI.reducerPath]: todoAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoAPI.middleware),
});

export default store;
