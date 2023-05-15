import { Badge, Flex, Title } from '@mantine/core';
import React from 'react';
import { GiAtomicSlashes } from 'react-icons/all';
import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <Link to="/">
      <Flex>
        <Flex align="center">
          <GiAtomicSlashes size="2rem" color="#339AF0" />
          <Title order={2} color="blue.5">
            NeuroSkills
          </Title>
        </Flex>
        <Badge color="teal">Beta</Badge>
      </Flex>
    </Link>
  );
};
