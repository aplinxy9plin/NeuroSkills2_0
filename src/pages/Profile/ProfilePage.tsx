import { AppShell } from '@mantine/core';
import React from 'react';
import { selectCourses } from '@/entities/course';
import { ChangeTheme } from '@/features/ChangeTheme';
import { useAppSelector } from '@/shared/model';
import { CourseList } from '@/widgets/CourseList';
import { MyHeader } from '@/widgets/Header/Header';
import { Logo } from '@/widgets/Logo';

export const ProfilePage = () => {
  const courses = useAppSelector(selectCourses);
  return (
    <AppShell padding="md" header={<MyHeader logo={<Logo />} actionSlot={<ChangeTheme />} />}>
      <CourseList courses={courses} />
    </AppShell>
  );
};
