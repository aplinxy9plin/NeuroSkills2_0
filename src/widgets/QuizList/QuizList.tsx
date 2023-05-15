import { Stack } from '@mantine/core';
import React from 'react';
import { Quiz, QuizCard } from '@/entities/quiz';

interface QuizListProps {
  quizzes: Quiz[];
}
export const QuizList = (props: QuizListProps) => {
  const { quizzes } = props;
  return (
    <Stack maw="45rem" mx="auto">
      {quizzes.map((q) => (
        <QuizCard key={q.id} quiz={q} />
      ))}
    </Stack>
  );
};
