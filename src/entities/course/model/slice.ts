import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Course, UpdateCourse } from './types';

type InitialStateType = {
  courses: Course[];
  currentCourse: Course | null;
};

const initialState: InitialStateType = {
  courses: [],
  currentCourse: null,
};

export const courseSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    setCourses: (state, action: PayloadAction<Course[]>) => {
      state.courses = action.payload;
    },
    addCourse: (state, action: PayloadAction<Course>) => {
      state.courses.push(action.payload);
    },
    updateCourse: (state, action: PayloadAction<UpdateCourse>) => {
      let course = action.payload;
      const target = state.courses.find((c) => c.id === course.id);
      course = { ...target, ...course };
      state.courses = [...state.courses.filter((c) => c.id !== course.id), course as Course];
    },
    setCurrentCourse: (state, action: PayloadAction<Course | null>) => {
      state.currentCourse = action.payload;
    },
  },
});

export const selectCourses = (state: RootState) => state.courses.courses;
export const selectCourseById = (state: RootState, id: string) => {
  return state.courses.courses.find((c) => c.id === id);
};
export const selectCurrentCourse = (state: RootState) => state.courses.currentCourse;
export const { setCourses, addCourse, updateCourse, setCurrentCourse } = courseSlice.actions;
