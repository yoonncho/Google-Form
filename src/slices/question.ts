import { createSlice } from '@reduxjs/toolkit';
import { QUESTION_TYPES } from '../const';

interface Question {
  id: number;
  type: number;
}

const initialState: Question[] = [
  {
    id: 0,
    type: QUESTION_TYPES.ONE_CHOICE,
  },
];

const { actions: questionActions, reducer: questionReducer } = createSlice({
  name: 'question',
  initialState,
  reducers: {
    changeType: (state, action) => {
      const { id, type } = action.payload;
      state[id].type = type;
    },
  },
});

export { questionActions };
export default questionReducer;
