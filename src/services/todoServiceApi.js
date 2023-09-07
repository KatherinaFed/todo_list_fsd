import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../shared/config';
import { uniqueId } from 'lodash';

export const todoAPI = createApi({
  reducerPath: 'todos',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ['Todos'],
  endpoints: (builder) => ({
    // GET TODOS
    getAllTodos: builder.query({
      query: () => '/tasks',
      providesTags: ['Todos'],
    }),
    // ADD TODO
    addTodo: builder.mutation({
      query: (data) => ({
        url: '/tasks',
        method: 'POST',
        body: {
          id: uniqueId(),
          title: data,
          isCompleted: false,
        },
      }),
      invalidatesTags: ['Todos'],
    }),
    deleteTodo: builder.mutation({
      query: ({ id }) => ({
        url: `/tasks/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Todos'],
    }),
    completeTodo: builder.mutation({
      query: ({ id }) => ({
        url: `/tasks/${id}`,
        method: 'PATCH',
        body: { id },
      }),
      invalidatesTags: ['Todos'],
    }),
    updateTodo: builder.mutation({
      query: ({ id, title }) => ({
        url: `/tasks/${id}`,
        method: 'PUT',
        body: { title },
      }),
      invalidatesTags: ['Todos'],
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
