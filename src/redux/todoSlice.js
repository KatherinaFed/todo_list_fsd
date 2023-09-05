import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';
import axios from 'axios';
import { API_URL } from '../shared/config';

// GET TODOS
export const getAllTodosThunk = createAsyncThunk(
  'todos/getAllTodosThunk',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(API_URL);

      return response.data;
    } catch (error) {
      return rejectWithValue('Error fetching todos');
    }
  }
);

// ADD TODOS
export const addTodoThunk = createAsyncThunk(
  'todos/addTodoThunk',
  async (payload) => {
    try {
      const response = await axios.post(API_URL, {
        title: payload,
      });

      if (response.status === 201) {
        return response.data.title;
      } else {
        throw new Error('Failed to add todo');
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

// REMOVE TODO
export const removeTodoThunk = createAsyncThunk(
  'todos/removeTodoThunk',
  async ({ id }) => {
    const response = await axios.delete(`${API_URL}/${id}`);

    if (response.status === 200) {
      return { id };
    }
  }
);

// COMPLETE TODO
export const completeTodoThunk = createAsyncThunk(
  'todos/completeTodoThunk',
  async ({ id }) => {
    const response = await axios.patch(API_URL, { id });

    return response.data;
  }
);

const initialState = {
  todos: [],
  error: false,
  isLoading: false,
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action) {
      const { todos } = state;
      const newTask = {
        id: _.uniqueId(),
        title: action.payload,
        isCompleted: false,
      };

      return {
        ...state,
        todos: [...todos, newTask],
      };
    },
    removeTodo(state, action) {
      const { id } = action.payload;

      return {
        ...state,
        todos: state.todos.filter((task) => task.id !== id),
      };
    },
    completeTodo(state, action) {
      const { id } = action.payload;
      const index = state.todos.findIndex((todo) => todo.id === id);
      state.todos[index].isCompleted = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllTodosThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllTodosThunk.fulfilled, (state, action) => {
        // GET TODOS
        state.isLoading = false;
        state.todos = action.payload;
      })
      .addCase(getAllTodosThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addTodoThunk.fulfilled, (state, action) => {
        // ADD TODO
        const { todos } = state;

        const newTask = {
          id: _.uniqueId(),
          title: action.payload,
          isCompleted: false,
        };

        return {
          ...state,
          todos: [...todos, newTask],
        };
      })
      .addCase(removeTodoThunk.fulfilled, (state, action) => {
        // REMOVE TODO
        const { id } = action.payload;

        return {
          ...state,
          todos: state.todos.filter((task) => task.id !== id),
        };
      })
      .addCase(completeTodoThunk.fulfilled, (state, action) => {
        // COMPLETE TODO
        const { id } = action.payload;
        const index = state.findIndex((todo) => todo.id === id);
        state.todos[index].isCompleted = true;
      });
  },
});

export const { addTodo, removeTodo, completeTodo } = todoSlice.actions;

export default todoSlice.reducer;
