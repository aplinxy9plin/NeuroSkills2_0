import { Navbar, ScrollArea } from '@mantine/core';
import React from 'react';
import { Topic } from '@/entities/topic';
import { TopicList } from '@/widgets/TopicList';

interface CourseNavbarProps {
  topics: Topic[];
}

export const CourseNavbar = (props: CourseNavbarProps) => {
  const { topics } = props;

  return (
    <Navbar height="100%" width={{ sm: 300 }} p="md" hiddenBreakpoint="sm" hidden>
      <Navbar.Section grow component={ScrollArea}>
        <TopicList topics={topics} />
      </Navbar.Section>
    </Navbar>
  );
};
