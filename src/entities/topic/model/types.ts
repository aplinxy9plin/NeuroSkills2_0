import type { Quiz } from '@/entities/quiz/@x/topic';

export type Topic = {
  id: string;
  courseId: string;
  name: string;
  content: string;
  order: number;
};

export type UpdateTopic = Pick<Topic, 'id'> & Partial<Omit<Topic, 'id'>>;

export type TopicWithQuiz = Topic & {
  quiz: Quiz[];
};
