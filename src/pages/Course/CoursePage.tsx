import { AppShell, Center, Stack, Text, Title } from '@mantine/core';
import React from 'react';
import { useParams } from 'react-router-dom';
import { selectCourseById } from '@/entities/course';
import { selectCourseTopics } from '@/entities/topic';
import { ChangeTheme } from '@/features/ChangeTheme';
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
          logo={<Logo />}
          actionSlot={
            <>
              <BurgerMenu bodySlot={<TopicList topics={topics} />} />
              <ChangeTheme />
            </>
          }
        />
      }
    >
      <Center h="100%">
        <Stack h="100%" align="center" justify="center">
          <Text fz="1.5rem" align="center" fw="bold">
            Вы начали прохождение курса <Title order={1} color="blue.5">{`"${course?.name}"`}</Title>
          </Text>
          <Text size="md" color="dimmed" align="center">
            Нажмите на нужную вам тему и мы начнем генерировать для вас инфу)
          </Text>
        </Stack>
      </Center>
    </AppShell>
  );
};
