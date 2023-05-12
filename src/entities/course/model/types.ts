import type { Topic } from '@/entities/topic/@x/course';

export type Course = {
  id: string;
  name: string;
  description: string;
};

export type CourseWithTopics = Course & {
  topics: Topic[];
};
