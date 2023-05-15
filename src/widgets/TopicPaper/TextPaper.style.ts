import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  topicContent: {
    padding: '1rem',
    fontSize: theme.fontSizes.lg,
    [theme.fn.smallerThan('md')]: {
      fontSize: theme.fontSizes.md,
      padding: '0.7rem',
    },
  },
}));
