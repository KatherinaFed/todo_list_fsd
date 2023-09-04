import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../entities/task/model';

const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

export default store;
