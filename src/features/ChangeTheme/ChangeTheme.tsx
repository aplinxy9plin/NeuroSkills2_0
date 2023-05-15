import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import React from 'react';
import { BsFillMoonFill, FiSun } from 'react-icons/all';

export const ChangeTheme = () => {
  const { toggleColorScheme, colorScheme } = useMantineColorScheme();

  return (
    <ActionIcon onClick={() => toggleColorScheme()}>
      {colorScheme === 'light' && <BsFillMoonFill />}
      {colorScheme === 'dark' && <FiSun color="yellow" />}
    </ActionIcon>
  );
};
