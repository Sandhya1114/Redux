// src/components/UserProfile.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserById } from '../features/user/userSlice';

const UserProfile = () => {
  const dispatch = useDispatch();
  const { data: user, status, error } = useSelector(state => state.user);
  const userId = useSelector(state => state.auth.userId);

  useEffect(() => {
    if (userId) dispatch(fetchUserById(userId));
  }, [userId, dispatch]);

  if (status === 'loading') return <p>Loading profile...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  return user ? (
    <div style={{ padding: '1rem', border: '1px solid #ccc' }}>
      <h2>User Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  ) : null;
};

export default UserProfile;