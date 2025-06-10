import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/auth-slice';
import taskReducer from './slices/task-slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tasks: taskReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});
