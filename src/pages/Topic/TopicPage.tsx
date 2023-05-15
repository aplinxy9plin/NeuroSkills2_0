import { ActionIcon, Affix, AppShell, Divider, rem, ScrollArea, Space, Title } from '@mantine/core';
import React from 'react';
import { AiFillMessage } from 'react-icons/all';
import { useParams } from 'react-router-dom';
import { selectTopicQuizzes } from '@/entities/quiz';
import { selectCourseTopics, selectTopicById } from '@/entities/topic';
import { ChangeTheme } from '@/features/ChangeTheme';
import { useAppSelector } from '@/shared/model';
import { AssistantChat } from '@/widgets/AssistantChat';
import { BurgerMenu } from '@/widgets/BurgerMenu';
import { LayoutHeader } from '@/widgets/Header';
import { Logo } from '@/widgets/Logo';
import { CourseNavbar } from '@/widgets/Navbar';
import { QuizList } from '@/widgets/QuizList';
import { TopicList } from '@/widgets/TopicList';
import { TopicPaper } from '@/widgets/TopicPaper';

export const TopicPage = () => {
  const { courseId, topicId } = useParams();
  const topic = useAppSelector((state: RootState) => selectTopicById(state, topicId || ''));
  const topics = useAppSelector((state: RootState) => selectCourseTopics(state, courseId || ''));
  const quizzes = useAppSelector((state: RootState) => selectTopicQuizzes(state, topicId || ''));

  return (
    <AppShell
      navbar={<CourseNavbar topics={topics} />}
      header={
        <LayoutHeader
          logo={<Logo />}
          actionSlot={
            <>
              <ChangeTheme />
              <BurgerMenu bodySlot={<TopicList topics={topics} />} />
            </>
          }
        />
      }
    >
      <ScrollArea h="87vh">
        {topic && <TopicPaper topic={topic} />}
        {!!quizzes.length && (
          <>
            <Divider size="xl" label={<Title order={3}>Проверь свои знания!</Title>} labelPosition="center" />
            <Space h="lg" />
            <QuizList quizzes={quizzes} />
          </>
        )}
        <Space h="lg" />
        <Affix position={{ bottom: rem(30), right: rem(30) }}>
          <AssistantChat
            openTrigger={
              <ActionIcon size="xl" color="blue.5">
                <AiFillMessage size="3rem" />
              </ActionIcon>
            }
            topicId={topicId || ''}
          />
        </Affix>
      </ScrollArea>
    </AppShell>
  );
};
