import { combineReducers } from '@reduxjs/toolkit';
import { courseSlice } from '@/entities/course';
import { quizSlice } from '@/entities/quiz';
import { topicSlice } from '@/entities/topic';

export const rootReducer = combineReducers({
  [courseSlice.name]: courseSlice.reducer,
  [topicSlice.name]: topicSlice.reducer,
  [quizSlice.name]: quizSlice.reducer,
});
