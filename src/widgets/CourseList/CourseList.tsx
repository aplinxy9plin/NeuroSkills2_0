import { Button, SimpleGrid } from '@mantine/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { Course, CourseCard } from '@/entities/course';

interface CourseListProps {
  courses: Course[];
}

export const CourseList = (props: CourseListProps) => {
  const { courses } = props;
  return (
    <SimpleGrid
      cols={3}
      breakpoints={[
        { maxWidth: 'lg', cols: 3, spacing: 'md' },
        { maxWidth: 'md', cols: 2, spacing: 'sm' },
        { maxWidth: 'sm', cols: 1, spacing: 'sm' },
      ]}
    >
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          course={course}
          actionSlot={
            <Link to={`/course/${course.id}`}>
              <Button variant="light" color="blue" fullWidth mt="md" radius="md">
                Open
              </Button>
            </Link>
          }
        />
      ))}
    </SimpleGrid>
  );
};
