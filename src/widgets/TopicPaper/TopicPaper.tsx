import { Text, TextProps } from '@mantine/core';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { Topic } from '@/entities/topic';
import { TextSkeleton } from '@/widgets/TextSkeleton/TextSkeleton';
import { useStyles } from './TextPaper.style';

interface TopicPaperProps {
  topic: Topic;
}
export const TopicPaper = (props: TopicPaperProps & TextProps) => {
  const { classes } = useStyles();
  const { topic, ...others } = props;

  return (
    <Text ta="justify" className={classes.topicContent} {...others}>
      {topic?.content ? (
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{topic.content}</ReactMarkdown>
      ) : (
        <TextSkeleton paragraphs={10} />
      )}
    </Text>
  );
};
