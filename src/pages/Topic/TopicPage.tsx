import { AppShell, Badge } from '@mantine/core';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import { selectCourseTopics, selectTopicById } from '@/entities/topic';
import { useAppSelector } from '@/shared/model';
import { BurgerMenu } from '@/widgets/BurgerMenu';
import { LayoutHeader } from '@/widgets/Header';
import { Logo } from '@/widgets/Logo';
import { CourseNavbar } from '@/widgets/Navbar';
import { TopicList } from '@/widgets/TopicList';

export const TopicPage = () => {
  const { courseId, topicId } = useParams();
  const topic = useAppSelector((state: RootState) => selectTopicById(state, topicId || ''));
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
      <ReactMarkdown>{topic?.content || ''}</ReactMarkdown>
    </AppShell>
  );
};
