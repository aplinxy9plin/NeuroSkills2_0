import React from 'react';
import { NavLink } from 'react-router-dom';
import { Topic } from '@/entities/topic';
import { useStyles } from './TopicList.style';

interface TopicListProps {
  topics: Topic[];
}

export const TopicList = (props: TopicListProps) => {
  const { classes, cx } = useStyles();
  const { topics } = props;
  return (
    <>
      {topics.map((topic) => (
        <NavLink
          className={({ isActive }) => cx(classes.link, { [classes.linkActive]: isActive })}
          to={`/course/${topic.courseId}/topic/${topic.id}`}
          key={topic.id}
        >
          <span>{topic.name}</span>
        </NavLink>
      ))}
    </>
  );
};
