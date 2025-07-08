// src/App.js
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './features/auth/authSlice';
import UserProfile from './components/UserProfile';
import PostsList from './components/PostLists';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Simulate login with userId = 1
    dispatch(login(1));
  }, [dispatch]);

  return (
    <div style={{ padding: '1rem' }}>
      <h1>RTK Async + RTK Query App</h1>
      <UserProfile />
      <hr />
      <PostsList />
    </div>
  );
};

export default App;