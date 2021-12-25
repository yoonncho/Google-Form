import { createSlice } from '@reduxjs/toolkit';
import { QUESTION_TYPES } from '../components/const';

const { actions: questionActions, reducer: questionReducer } = createSlice({
  name: 'question',

  initialState: {
    id: 1,
    type: QUESTION_TYPES.ONE_CHOICE,
  },

  reducers: {
    changeType: (state, action) => {
      return { ...state, type: action.payload };
    },
  },
});

export { questionActions };
export default questionReducer;
