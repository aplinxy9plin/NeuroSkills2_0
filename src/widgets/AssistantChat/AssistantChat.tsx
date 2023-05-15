import { Divider, Drawer, Flex, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React, { ReactNode } from 'react';
import { BsPatchQuestionFill } from 'react-icons/all';
import { AskAssistant } from '@/features/AskAssistant';

interface AssistantChatProps {
  openTrigger: ReactNode;
  topicId: string;
}
export const AssistantChat = (props: AssistantChatProps) => {
  const { openTrigger, topicId } = props;
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <span onClick={() => open()}>{openTrigger}</span>
      <Drawer.Root opened={opened} onClose={close} position="right">
        <Drawer.Content>
          <Drawer.Header>
            <Drawer.Title>
              <Flex align="center" gap={10}>
                <BsPatchQuestionFill size="1.7rem" color="blue.5" />
                <Title order={3} color="blue.5">
                  Your Assistant
                </Title>
              </Flex>
            </Drawer.Title>
            <Drawer.CloseButton />
          </Drawer.Header>
          <Divider />
          <Drawer.Body h="89%">
            <AskAssistant topicId={topicId} />
          </Drawer.Body>
        </Drawer.Content>
        <Divider />
      </Drawer.Root>
    </>
  );
};
