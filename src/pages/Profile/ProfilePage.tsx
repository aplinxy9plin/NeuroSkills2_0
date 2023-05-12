import { Stack } from '@mantine/core';
import React from 'react';
import { selectCourses } from '@/entities/course';
import { useAppSelector } from '@/shared/model';
import { CourseList } from '@/widgets/CourseList/ui/CourseList';
import { NewCourse } from '@/widgets/NewCourse';

export const ProfilePage = () => {
  const courses = useAppSelector(selectCourses);
  return (
    <Stack>
      <NewCourse />
      <CourseList courses={courses} />
    </Stack>
  );
};
