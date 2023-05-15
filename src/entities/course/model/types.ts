import type { Topic } from '@/entities/topic/@x/course';

export type Course = {
  id: string;
  name: string;
  description: string;
};

export type UpdateCourse = Pick<Course, 'id'> & Partial<Omit<Course, 'id'>>;

export type CourseWithTopics = Course & {
  topics: Topic[];
};
