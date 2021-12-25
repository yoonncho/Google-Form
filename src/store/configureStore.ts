import { configureStore } from '@reduxjs/toolkit';
import questionReducer from '../slices/question';

export const store = configureStore({
  reducer: {
    questionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
