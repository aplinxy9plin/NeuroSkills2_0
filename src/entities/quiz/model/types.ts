export type Quiz = {
  id: string;
  topicId: string;
  question: string;
  options: QuizOptions;
  answer: QuizAnswer;
  completed: boolean;
  order: number;
};

export type UpdateQuiz = Pick<Quiz, 'id'> & Partial<Omit<Quiz, 'id'>>;

export type QuizOptions = {
  a: string;
  b: string;
  c: string;
};

export type QuizAnswer = keyof QuizOptions;
