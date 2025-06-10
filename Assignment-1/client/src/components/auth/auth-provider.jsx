/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCredentials } from '@/store/slices/auth-slice';

export function AuthProvider({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // In a real app, you'd validate the token with the server
      // For now, we'll just set the credentials if token exists
      try {
        const userData = JSON.parse(localStorage.getItem('user') || '{}');
        if (userData.id) {
          dispatch(setCredentials({ user: userData, token }));
        }
      } catch (error) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      }
    }
  }, [dispatch]);

  return <>{children}</>;
}
