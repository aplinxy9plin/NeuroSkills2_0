import { Card, Text } from '@mantine/core';
import React from 'react';
import { type Course } from '../model/types';

interface CourseCardProps {
  course: Course;
  actionSlot?: React.ReactNode;
}

export const CourseCard = (props: CourseCardProps) => {
  const { course, actionSlot } = props;
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Text mt="md" mb="xs" weight={500}>
        {course.name}
      </Text>
      <Text size="sm" color="dimmed">
        {course.description}
      </Text>
      {actionSlot}
    </Card>
  );
};
