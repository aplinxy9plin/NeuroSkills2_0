import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Quiz } from './types';

type InitialStateType = {
  quizzes: Quiz[];
};

const initialState: InitialStateType = {
  quizzes: [],
};

export const quizSlice = createSlice({
  name: 'quizzes',
  initialState,
  reducers: {
    setQuizzes: (state, action: PayloadAction<Quiz[]>) => {
      state.quizzes = action.payload;
    },
    addQuiz: (state, action: PayloadAction<Quiz>) => {
      state.quizzes.push(action.payload);
    },
  },
});

export const selectQuizzes = (state: RootState) => state.quizzes.quizzes;
export const selectTopicQuizzes = (state: RootState, topicId: string) => {
  return state.quizzes.quizzes.filter((q) => q.topicId === topicId);
};

export const { setQuizzes, addQuiz } = quizSlice.actions;
