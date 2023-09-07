import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../shared/config';

export const todoAPI = createApi({
  reducerPath: 'todos',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ['Todos'],
  endpoints: (builder) => ({
    getAllTodos: builder.query({
      query: () => '/tasks',
      providesTags: ['Todos'],
    }),
    addTodo: builder.mutation({
      query: (data) => ({
        url: '/tasks',
        method: 'PUT',
        body: data,
      }),
      providesTags: ['Todos'],
    }),
    deleteTodo: builder.mutation({
      query: ({ id }) => ({
        url: `/todos/${id}`,
        method: 'DELETE',
      }),
      providesTags: ['Todos'],
    }),
    completeTodo: builder.mutation({
      query: ({ id }) => ({
        url: `/todos/${id}`,
        method: 'PATCH',
        body: { id },
      }),
      providesTags: ['Todos'],
    }),
    updateTodo: builder.mutation({
      query: ({ id, title }) => ({
        url: `/todos/${id}`,
        method: 'PUT',
        body: { title },
      }),
      providesTags: ['Todos'],
    }),
  }),
});

export const {
  useGetAllTodosQuery,
  useAddTodoMutation,
  useDeleteTodoMutation,
  useCompleteTodoMutation,
  useUpdateTodoMutation,
} = todoAPI;
