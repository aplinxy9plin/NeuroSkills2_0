import { Stack } from '@mantine/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { Topic } from '@/entities/topic';

interface TopicListProps {
  topics: Topic[];
}
export const TopicList = (props: TopicListProps) => {
  const { topics } = props;
  topics.sort((a, b) => a.order - b.order);
  return (
    <Stack>
      {topics.map((topic) => (
        <Link to={`/topic/${topic.id}`} key={topic.id}>
          {topic.name}
        </Link>
      ))}
    </Stack>
  );
};
