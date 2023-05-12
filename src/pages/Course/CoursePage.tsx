import { AppShell, Badge, Center, Title } from '@mantine/core';
import React from 'react';
import { useParams } from 'react-router-dom';
import { selectCourseById } from '@/entities/course';
import { selectCourseTopics } from '@/entities/topic';
import { useAppSelector } from '@/shared/model';
import { BurgerMenu } from '@/widgets/BurgerMenu';
import { LayoutHeader } from '@/widgets/Header';
import { Logo } from '@/widgets/Logo';
import { CourseNavbar } from '@/widgets/Navbar';
import { TopicList } from '@/widgets/TopicList';

export const CoursePage = () => {
  const { courseId } = useParams();
  const course = useAppSelector((state: RootState) => selectCourseById(state, courseId || ''));
  const topics = useAppSelector((state: RootState) => selectCourseTopics(state, courseId || ''));

  return (
    <AppShell
      navbar={<CourseNavbar topics={topics} />}
      header={
        <LayoutHeader
          logo={<Logo badge={<Badge color="teal">Beta</Badge>} />}
          actionSlot={<BurgerMenu bodySlot={<TopicList topics={topics} />} />}
        />
      }
    >
      <Center>
        <Title>{course?.name}</Title>
      </Center>
    </AppShell>
  );
};
