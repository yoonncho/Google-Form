import { createSlice } from '@reduxjs/toolkit';
import { QUESTION_TYPES } from '../const';
import shortid from 'shortid';

interface Option {
  id: number;
  optionContent: string;
}

export interface Question {
  id: string;
  type: number;
  questionContent: string;
  isNecessary: boolean;
  options: Option[];
  answers: Array<number>;
  narrativeAnswer: string;
}

const initialState: Question[] = [
  {
    id: shortid(),
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
    answers: [],
    narrativeAnswer: '',
  },
];

const getNewQuestion = (newQuestionId: string) => ({
  id: newQuestionId,
  type: QUESTION_TYPES.ONE_CHOICE,
  questionContent: '',
  isNecessary: false,
  options: [
    {
      id: 1,
      optionContent: '',
    },
  ],
  answers: [],
  narrativeAnswer: '',
});

const getNewOption = (newId: number) => ({
  id: newId,
  optionContent: '',
});

const { actions: questionActions, reducer: questionReducer } = createSlice({
  name: 'question',
  initialState,
  reducers: {
    changeType: (state, action) => {
      const { id, type } = action.payload;
      const question = state.find((item) => item.id === id);
      question && (question.type = type);
    },

    setNecessary: (state, action) => {
      const id = action.payload;
      const question = state.find((item) => item.id === id);
      question && (question.isNecessary = !question.isNecessary);
    },

    setQuestionContent: (state, action) => {
      const { id, questionContent } = action.payload;
      const question = state.find((item) => item.id === id);
      question && (question.questionContent = questionContent);
    },

    addQuestion: (state, action) => {
      const newQuestionId = action.payload;
      state.push(getNewQuestion(newQuestionId));
    },

    deleteQuestion: (state, action) => {
      const id = action.payload;
      return state.filter((item) => item.id !== id);
    },

    addOption: (state, action) => {
      const { id, optionId } = action.payload;
      const questionId = state.findIndex((item) => item.id === String(id));
      state[questionId].options.push(getNewOption(optionId));
    },

    setOptionContent: (state, action) => {
      const { id, optionId, optionContent } = action.payload;
      const questionId = state.findIndex((item) => item.id === String(id));
      const optionIdx = state[questionId].options.findIndex((item) => item.id === Number(optionId));
      state[questionId].options[optionIdx].optionContent = optionContent;
    },

    markRadioAnswer: (state, action) => {
      const { id, optionId, isAnswer } = action.payload;
      const question = state.find((item) => item.id === id);
      if (!question) return;
      question.answers.length > 0 && question.answers.splice(-1, 1); // 한개만 저장하기 위함
      if (!isAnswer) {
        question.answers.push(optionId);
      }
    },

    markCheckAnswer: (state, action) => {
      const { id, optionId, isAnswer } = action.payload;
      const question = state.find((item) => item.id === id);
      if (!question) return;
      const answerIdx = question.answers.findIndex((item) => item === optionId);

      if (!isAnswer) {
        question.answers.push(optionId);
      } else {
        if (answerIdx === 0) question.answers.shift();
        else question.answers.splice(answerIdx, 1);
      }
    },
  },
});

export { questionActions };
export default questionReducer;
