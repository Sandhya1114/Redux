// src/components/PostsList.js
import React, { useState } from 'react';
import { useGetPostsQuery } from '../features/posts/postsApiSlice';

const PostsList = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError, refetch } = useGetPostsQuery(page);

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Failed to load posts.</p>;

  return (
    <div>
      <h2>Posts (Page {page})</h2>
      <button onClick={() => refetch()}>🔄 Refresh</button>
      <ul>
        {data.map(post => (
          <li key={post.id}><strong>{post.title}</strong></li>
        ))}
      </ul>
      <div>
        <button disabled={page === 1} onClick={() => setPage(p => p - 1)}>Prev</button>
        <button onClick={() => setPage(p => p + 1)}>Next</button>
      </div>
    </div>
  );
};

export default PostsList;