import { Stack } from '@mantine/core';
import React from 'react';
import { useParams } from 'react-router-dom';
import { selectCourseById } from '@/entities/course';
import { selectCourseTopics } from '@/entities/topic';
import { useAppSelector } from '@/shared/model';
import { TopicList } from '@/widgets/TopicList';

export const CoursePage = () => {
  const { courseId } = useParams();
  const course = useAppSelector((state: RootState) => selectCourseById(state, courseId || ''));
  const topics = useAppSelector((state: RootState) => selectCourseTopics(state, courseId || ''));

  return (
    <Stack>
      <div>{course?.name}</div>
      {topics && <TopicList topics={topics} />}
    </Stack>
  );
};
