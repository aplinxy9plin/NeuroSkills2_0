import { ScrollArea } from '@mantine/core';
import React, { useEffect, useRef } from 'react';
import { ChatMessage } from '../model';
import { Message } from './Message';

interface ChatProps {
  messages: ChatMessage[];
}
export const ChatBox = (props: ChatProps) => {
  const { messages } = props;
  const viewport = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (viewport && viewport.current) {
      viewport.current.scrollTo({ top: viewport.current.scrollHeight, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    messages.sort((a, b) => +a.date - +b.date);
    scrollToBottom();
  }, [messages]);

  return (
    <ScrollArea h="100%" sx={{ flex: '1 1 0' }} viewportRef={viewport}>
      {messages.map((m) => m.text.length > 0 && <Message message={m} key={m.id} />)}
    </ScrollArea>
  );
};
