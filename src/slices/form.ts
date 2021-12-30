import { createSlice, combineReducers } from '@reduxjs/toolkit';
import { questionReducer } from '.';

interface FormInfo {
  title: string;
  detail: string;
}

const initialState: FormInfo = {
  title: '제목 없는 설문지',
  detail: '',
};

const { actions: formActions, reducer: formReducer } = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addForm: (state, action) => {
      const { title, detail } = action.payload;
      state.title = title;
      state.detail = detail;
    },
  },
});

export { formActions };
export default combineReducers({
  form: formReducer,
  questions: questionReducer,
});
