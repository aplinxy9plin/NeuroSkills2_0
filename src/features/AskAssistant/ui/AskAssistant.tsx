import { ActionIcon, Input, Stack } from '@mantine/core';
import React, { useState } from 'react';
import { IoMdSend } from 'react-icons/all';
import { ChatBox } from '@/entities/chat';
import { useAssistant } from '../model/hooks';

interface AskAssistantButtonProps {
  topicId: string;
}

export const AskAssistant = (props: AskAssistantButtonProps) => {
  const { topicId } = props;
  const [question, setQuestion] = useState('');
  const { ask, messages, isGenerating } = useAssistant(topicId);
  const handleClick = async () => {
    if (question.length > 0) {
      await ask(question);
    }
  };

  return (
    <Stack h="100%">
      <ChatBox messages={messages} />
      <Input
        placeholder="Введите сообщение..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        rightSection={
          <ActionIcon disabled={isGenerating || question.length === 0} onClick={handleClick}>
            <IoMdSend size="1.7rem" />
          </ActionIcon>
        }
      />
    </Stack>
  );
};
