// User.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { fetchUser } from './counterSlice';
import { fetchUser } from './slice';

const User = () => {
  const user = useSelector((state) => state.counter.user);
  const loading = useSelector((state) => state.counter.loading);
  const error = useSelector((state) => state.counter.error);
  const dispatch = useDispatch();
 

  useEffect(() => {
    dispatch(fetchUser(1));
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!user) {
    return null;
    
  }

  return (
    <div>
      <h1>User Details</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
    </div>
  );
};

export default User;
