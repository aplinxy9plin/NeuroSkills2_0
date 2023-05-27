import { Button, Flex, Group, Modal, useMantineTheme } from '@mantine/core';
import { selectOpenVoice, setVoiceOpen } from '@/entities/chat/model/slice';
import { useAppDispatch, useAppSelector } from '@/shared/model';
import CheckedIcon from './checked.svg';
import { useStyles } from './VoiceModal.style';

const defaultChars = Array(20).fill({
  name: 'Sam',
  url: 'chars/sam.jpeg',
});

export const VoiceModal = () => {
  const { classes } = useStyles();
  const isVoiceOpen = useAppSelector((state: RootState) => selectOpenVoice(state));
  const dispatch = useAppDispatch();
  const theme = useMantineTheme();
  const close = () => {
    dispatch(setVoiceOpen({ isVoiceOpen: false }));
  };

  return (
    <Modal
      opened={isVoiceOpen}
      onClose={close}
      overlayProps={{
        color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2],
        opacity: 0.55,
        blur: 3,
      }}
      centered
      size="55%"
    >
      <Flex align="center" justify="center">
        <Group className={classes.charsContainer}>
          <div className={classes.w100}>
            <span>Выберите аватар</span>
          </div>
          {defaultChars.map((item, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <img className={classes.avatar} key={`char_${index}`} width="100px" src={item.url} alt={item.name} />
          ))}
        </Group>
        <Group>
          <Button>Загрузить файл</Button>
        </Group>
      </Flex>
    </Modal>
  );
};
