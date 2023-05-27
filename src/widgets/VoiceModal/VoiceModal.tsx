import { useState } from 'react'
import { Button, FileInput, Flex, Group, Modal, useMantineTheme } from '@mantine/core';
import { selectOpenVoice, setVoiceOpen } from '@/entities/chat/model/slice';
import { useAppDispatch, useAppSelector } from '@/shared/model';
import { useStyles } from './VoiceModal.style';
import { defaultChars } from './data/defaultChars';

export const VoiceModal = () => {
  const [choosen, setChoosen] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const { classes } = useStyles();
  const isVoiceOpen = useAppSelector((state: RootState) => selectOpenVoice(state));
  const dispatch = useAppDispatch();
  const theme = useMantineTheme();
  const close = () => {
    dispatch(setVoiceOpen({ isVoiceOpen: false }));
  };

  const upload = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5000);
  }

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
      size="30%"
    >
      <Flex align="center" justify="center" gap={16}>
        <Group className={classes.charsContainer}>
          <div className={classes.w100}>
            <span>Выберите аватар</span>
          </div>
          {defaultChars.map((item, index) => (
            <span className={classes.avatarContainer} onClick={() => setChoosen(index)}>
              <img className={`${classes.avatar} ${index === choosen ? classes.avatarChoosen : ''}`} key={`char_${index}`} width="100px" src={item.uri} alt={item.name} />
            </span>
          ))}
        </Group>
        <Group>
          <span>
            <b>ИЛИ</b>
          </span>
        </Group>
        <Group>
          <FileInput
            placeholder="Выбрать файл"
            label="Ваш персонаж"
          />
          <Button loading={loading} onClick={upload}>Отправить</Button>
        </Group>
      </Flex>
    </Modal>
  );
};
