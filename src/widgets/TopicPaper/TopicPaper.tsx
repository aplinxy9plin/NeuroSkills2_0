import { Text } from '@mantine/core';
import React, { MouseEvent, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Topic } from '@/entities/topic';
import { TextSkeleton } from '@/widgets/TextSkeleton/TextSkeleton';
import { useStyles } from './TextPaper.style';

interface TopicPaperProps {
  topic: Topic;
}
export const TopicPaper = (props: TopicPaperProps) => {
  const root = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const { classes } = useStyles();
  const { topic } = props;

  const handleClick = () => {
    const text = window.getSelection()?.toString();
    if (!text || text.length === 0) {
      setVisible(false);
    }
  };
  const handleWheel = () => {
    setVisible(false);
  };
  const handleContextMenu = (event: MouseEvent<HTMLDivElement>) => {
    const text = window.getSelection()?.toString();
    if (text && text.length) {
      setVisible(true);
    }
    // event.preventDefault();
    // setVisible(true);
    // if (!root || !root.current) return;
    const clickX = event.clientX;
    const clickY = event.clientY;
    const screenW = window.innerWidth;
    const screenH = window.innerHeight;
    const rootW = root!.current!.offsetWidth;
    const rootH = root!.current!.offsetHeight;

    const right = screenW - clickX > rootW;
    const left = !right;
    const top = screenH - clickY > rootH;
    const bottom = !top;

    if (right) {
      root!.current!.style.left = `${clickX + 5}px`;
    }

    if (left) {
      root!.current!.style.left = `${clickX - rootW - 5}px`;
    }

    if (top) {
      root!.current!.style.top = `${clickY + 5}px`;
    }

    if (bottom) {
      root!.current!.style.top = `${clickY - rootH - 5}px`;
    }
  };

  return (
    <>
      <Text
        onMouseUp={handleContextMenu}
        onWheel={handleWheel}
        onClick={handleClick}
        // onContextMenu={handleContextMenu}
        ta="justify"
        className={classes.topicContent}
      >
        {topic?.content ? <ReactMarkdown>{topic.content}</ReactMarkdown> : <TextSkeleton paragraphs={10} />}
      </Text>
      <div
        ref={root}
        style={{
          position: 'fixed',
          width: '300px',
          height: '350px',
          backgroundColor: 'green',
          visibility: visible ? 'visible' : 'hidden',
        }}
      >
        Hey guys
      </div>
    </>
  );
};
