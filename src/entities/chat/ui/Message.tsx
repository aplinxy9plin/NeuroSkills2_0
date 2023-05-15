import { Flex, Paper, Text } from '@mantine/core';
import React from 'react';
import { ChatMessage } from '../model';

interface MessageProps {
  message: ChatMessage;
}
export const Message = (props: MessageProps) => {
  const { message } = props;
  return (
    <Flex justify={message.fromUser ? 'flex-end' : 'flex-start'} my="2rem" mx="1rem">
      <Paper radius="md" p="0.8rem" bg={message.fromUser ? 'gray' : 'blue.5'}>
        <Text color="white">{message.text}</Text>
      </Paper>
    </Flex>
  );
};
