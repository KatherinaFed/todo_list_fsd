import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';
import { API_URL } from '../../shared/config';
import axios from 'axios';

export const getAllTodosThunk = createAsyncThunk('todos/getAllTasks', async () => {
  const response = await axios.get(API_URL);

  return response.data;
});

export const addTodoThunk = (todo) => async (dispatch) => {
  const response = await axios.post(API_URL, { title: todo });
  debugger
  console.log(response)
  // dispatch(addTodo(response.title));
};

// export const removeTodoThunk = createAsyncThunk('todos/removeTodo', async (paylaod) => {
//   const response = await axios.delete(`${API_URL}/${payload.id}`);

//   return response.data;
// })

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo(state, action) {
      const newTask = {
        id: _.uniqueId(),
        title: action.payload,
        isCompleted: false,
      };
      state.push(newTask);
      return state;
    },
    removeTodo(state, action) {
      // id
      return state.filter((task) => task.id !== action.payload);
    },
    completeTodo(state, action) {
      return state.map((task) => {
        if (task.id === action.payload) {
          return { ...task, isCompleted: true };
        }

        return task;
      });
    },
  },
});

export const { addTodo, removeTodo, completeTodo } = todoSlice.actions;

export default todoSlice.reducer;
