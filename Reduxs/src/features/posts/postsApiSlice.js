// src/features/posts/postsApiSlice.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: (page = 1) => `posts?_page=${page}&_limit=5`
    })
  }),
  refetchOnReconnect: true,
  refetchOnFocus: true,
});

export const { useGetPostsQuery } = postsApi;