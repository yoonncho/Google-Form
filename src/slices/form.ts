import { createSlice, combineReducers } from '@reduxjs/toolkit';
import { questionReducer } from '.';

interface FormInfo {
  title: string;
  detail: string;
}

const initialState: FormInfo = {
  title: '',
  detail: '',
};

const { actions: formActions, reducer: formReducer } = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addForm: (state, action) => {
      const { formTitle, formDetail } = action.payload;
      state.title = formTitle;
      state.detail = formDetail;
    },
  },
});

export { formActions };
export default combineReducers({
  form: formReducer,
  questions: questionReducer,
});
