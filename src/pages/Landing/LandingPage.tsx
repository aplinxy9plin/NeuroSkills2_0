import { AppShell, Center, Flex, Space, Title } from '@mantine/core';
import React from 'react';
import { MyHeader } from '@/widgets/Header/Header';
import { Logo } from '@/widgets/Logo';
import { NewCourse } from '@/widgets/NewCourse';

export const LandingPage = () => {
  return (
    <AppShell padding="md" header={<MyHeader logo={<Logo />} />}>
      <Center h="100%">
        <Flex w="40rem" miw="20rem" align="center" direction="column" gap="xl">
          <Title align="center" order={1} color="blue.5">
            Просто напиши что хочешь изучить
          </Title>
          <Space />
          <NewCourse />
        </Flex>
      </Center>
    </AppShell>
  );
};
