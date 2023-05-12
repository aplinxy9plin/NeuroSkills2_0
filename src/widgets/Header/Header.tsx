import { Group, Header, rem } from '@mantine/core';
import React from 'react';
import { useStyles } from './Header.style';

interface HeaderProps {
  logo: React.ReactNode;
  actionSlot?: React.ReactNode;
}
export const MyHeader = (props: HeaderProps) => {
  const { classes } = useStyles();
  const { logo, actionSlot } = props;
  return (
    <Header height={rem(60)} p="xs" mb={120}>
      <Group position="apart" w="100%" className={classes.header}>
        {logo}
        {actionSlot}
      </Group>
    </Header>
  );
};
