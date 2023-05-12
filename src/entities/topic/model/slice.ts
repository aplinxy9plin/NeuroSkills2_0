import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Topic, UpdateTopic } from './types';

type InitialStateType = {
  topics: Topic[];
  currentTopic: Topic | null;
};

const initialState: InitialStateType = {
  topics: [],
  currentTopic: null,
};

export const topicSlice = createSlice({
  name: 'topics',
  initialState,
  reducers: {
    setTopics: (state, action: PayloadAction<Topic[]>) => {
      state.topics = action.payload;
    },
    addTopic: (state, action: PayloadAction<Topic>) => {
      state.topics.push(action.payload);
    },
    updateTopic: (state, action: PayloadAction<UpdateTopic>) => {
      let topic = action.payload as Topic;
      const target = state.topics.find((c) => c.id === topic.id);
      topic = { ...target, ...topic };
      state.topics = [...state.topics.filter((c) => c.id !== topic.id), topic];
    },
    setCurrentTopic: (state, action: PayloadAction<Topic | null>) => {
      state.currentTopic = action.payload;
    },
  },
});

export const selectTopics = (state: RootState) => state.topics.topics;
export const selectCourseTopics = (state: RootState, courseId: string) => {
  return state.topics.topics.filter((t) => t.courseId === courseId);
};
export const selectTopicById = (state: RootState, topicId: string) => {
  return state.topics.topics.find((t) => t.id === topicId);
};
export const selectCurrentTopic = (state: RootState) => state.topics.currentTopic;

export const { setTopics, setCurrentTopic, addTopic, updateTopic } = topicSlice.actions;
