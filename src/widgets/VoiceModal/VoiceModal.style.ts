import { createStyles } from '@mantine/core';

export const useStyles = createStyles(() => ({
  charsContainer: {
    maxHeight: 300,
    maxWidth: 300,
  },
  w100: {
    width: '100%',
  },
  avatarContainer: {
    cursor: 'pointer',
  },
  avatar: {
    borderRadius: 100,
    width: 80,
    height: 80,
    ':hover': {
        borderColor: '#339af0',
        borderWidth: 2,
        borderStyle: 'solid',
    }
  },
  avatarChoosen: {
    borderColor: '#339af0',
    borderWidth: 2,
    borderStyle: 'solid',
  }
}));
