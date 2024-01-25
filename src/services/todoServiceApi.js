import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { uniqueId } from 'lodash';

export const todoAPI = createApi({
  reducerPath: 'todos',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://mock-server-trxu.onrender.com' }),
  tagTypes: ['Todos'],
  endpoints: (builder) => ({
    // GET
    getAllTodos: builder.query({
      query: () => '/tasks',
      providesTags: ['Todos'],
    }),
    // ADD
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
    // DELETE
    deleteTodo: builder.mutation({
      query: ({ id }) => ({
        url: `/tasks/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Todos'],
    }),
    // COMPLETE
    completeTodo: builder.mutation({
      query: ({ id }) => ({
        url: `/tasks/${id}`,
        method: 'PATCH',
        body: { id, isCompleted: true },
      }),
      invalidatesTags: ['Todos'],
    }),
    // UPDATE
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
