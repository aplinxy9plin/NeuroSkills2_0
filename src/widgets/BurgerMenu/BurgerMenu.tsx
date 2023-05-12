import { Burger, Paper, Transition } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React, { ReactNode } from 'react';
import { useStyles } from './BurgerMenu.style';

interface BurgerMenuProps {
  bodySlot: ReactNode;
}

export const BurgerMenu = (props: BurgerMenuProps) => {
  const { bodySlot } = props;
  const { classes } = useStyles();
  const [opened, { toggle }] = useDisclosure(false);
  return (
    <>
      <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
      <Transition transition="pop-top-right" duration={200} mounted={opened}>
        {(styles) => (
          <Paper className={classes.dropdown} withBorder style={styles}>
            {bodySlot}
          </Paper>
        )}
      </Transition>
    </>
  );
};
