import { createSlice } from '@reduxjs/toolkit';
import { QUESTION_TYPES } from '../const';

interface Option {
  id: number;
  optionContent: string;
}

export interface Question {
  id: number;
  type: number;
  questionContent: string;
  isNecessary: boolean;
  options: Option[];
}

const initialState: Question[] = [
  {
    id: 0,
    type: QUESTION_TYPES.ONE_CHOICE,
    questionContent: '',
    isNecessary: false,
    options: [
      {
        id: 1,
        optionContent: '',
      },
      {
        id: 2,
        optionContent: '',
      },
    ],
  },
];

const getNewQuestion = (newId: number) => ({
  id: newId,
  type: QUESTION_TYPES.ONE_CHOICE,
  questionContent: '',
  isNecessary: false,
  options: [
    {
      id: 1,
      optionContent: '',
    },
  ],
});

const { actions: questionActions, reducer: questionReducer } = createSlice({
  name: 'question',
  initialState,
  reducers: {
    changeType: (state, action) => {
      const { id, type } = action.payload;
      state[id].type = type;
    },
    setNecessary: (state, action) => {
      const { id, isNecessary } = action.payload;
      state[id].isNecessary = isNecessary;
    },
    setQuestionContent: (state, action) => {
      const { id, questionContent } = action.payload;
      state[id].questionContent = questionContent;
    },
    addQuestion: (state) => {
      state.push(getNewQuestion(state.length));
    },
  },
});

export { questionActions };
export default questionReducer;
