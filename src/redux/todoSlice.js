import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';
import axios from 'axios';
import { API_URL } from '../shared/config';

// GET TODOS
export const getAllTodosThunk = createAsyncThunk(
  'todos/getAllTodosThunk',
  async () => {
    const response = await axios.get(API_URL);
    console.log('Thunk: ', response.data);

    return response.data;
  }
);

// ADD TODOS
export const addTodoThunk = createAsyncThunk(
  'todos/addTodoThunk',
  async (payload) => {
    try {
      const response = await axios.post(API_URL, {
        title: payload.title,
      });

      if (response.status === 200) {
        return { todo: response.data };
      } else {
        throw new Error('Failed to add todo');
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo(state, action) {
      const { title } = action.payload;

      const newTask = {
        id: _.uniqueId(),
        title,
        isCompleted: false,
      };

      state.push(newTask);
    },
    removeTodo(state, action) {
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
  extraReducers: (builder) => {
    builder
      .addCase(getAllTodosThunk.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(addTodoThunk.fulfilled, (state, action) => {
        // Handle the fulfilled action by updating the state with the new todo
        state.push(action.payload.todo);
      });
  },
});

export const { addTodo, removeTodo, completeTodo } = todoSlice.actions;

export default todoSlice.reducer;
