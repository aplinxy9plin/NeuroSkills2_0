import { Stack } from '@mantine/core';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import { selectTopicQuizzes } from '@/entities/quiz';
import { selectTopicById } from '@/entities/topic';
import { useAppSelector } from '@/shared/model';

export const TopicPage = () => {
  const { topicId } = useParams();
  const topic = useAppSelector((state: RootState) => selectTopicById(state, topicId || ''));
  const quiz = useAppSelector((state: RootState) => selectTopicQuizzes(state, topicId || ''));

  return (
    <Stack>
      <div>{topic?.name}</div>
      <ReactMarkdown>{topic?.content || ''}</ReactMarkdown>
      <div>{JSON.stringify(quiz)}</div>
    </Stack>
  );
};
