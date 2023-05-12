import { Grid } from '@mantine/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { Course, CourseCard } from '@/entities/course';

interface CourseListProps {
  courses: Course[];
}

export const CourseList = (props: CourseListProps) => {
  const { courses } = props;
  return (
    <Grid>
      {courses.map((course) => (
        <Grid.Col key={course.id} span={4}>
          <CourseCard course={course} actionSlot={<Link to={`/course/${course.id}`}>Open</Link>} />
        </Grid.Col>
      ))}
    </Grid>
  );
};
