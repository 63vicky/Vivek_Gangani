/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCredentials } from '@/store/slices/auth-slice';
import { authAPI } from '@/services/api';

export function AuthProvider({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      (async () => {
        try {
          const user = await authAPI.getMe();
          if (user && user.id) {
            dispatch(setCredentials({ user, token }));
          }
        } catch (error) {
          localStorage.removeItem('token');
        }
      })();
    }
  }, [dispatch]);

  return <>{children}</>;
}
