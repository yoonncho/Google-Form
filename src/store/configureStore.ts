import { configureStore } from '@reduxjs/toolkit';
import { questionReducer, formReducer } from '../slices';

export const store = configureStore({
  reducer: {
    questions: questionReducer,
    form: formReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
