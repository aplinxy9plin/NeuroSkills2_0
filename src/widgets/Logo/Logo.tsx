import { Flex, Title } from '@mantine/core';
import React, { ReactNode } from 'react';
import { GiAtomicSlashes } from 'react-icons/all';
import { Link } from 'react-router-dom';

interface LogoProps {
  badge?: ReactNode;
}
export const Logo = (props: LogoProps) => {
  const { badge } = props;
  return (
    <Link to="/">
      <Flex>
        <Flex align="center">
          <GiAtomicSlashes size="2rem" color="#339AF0" />
          <Title order={2} color="blue.5">
            NeuroSkills
          </Title>
        </Flex>
        {badge}
      </Flex>
      {/* <Badge color="teal">Beta</Badge> */}
    </Link>
  );
};
