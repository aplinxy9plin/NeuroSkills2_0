import { Button, Flex, Group, Header, rem } from '@mantine/core';
import React from 'react';
import { useParams } from 'react-router-dom';
import { selectIsUploadingNFT, setTokenId, setUploadingNFT, setVoiceOpen } from '@/entities/chat/model/slice';
import { selectCourseTopics } from '@/entities/topic';
import { uploadNFT } from '@/features/NFT/lib/upload';
import { useAppDispatch, useAppSelector } from '@/shared/model';
import { useStyles } from './Header.style';

interface HeaderProps {
  logo: React.ReactNode;
  actionSlot?: React.ReactNode;
}
export const MyHeader = (props: HeaderProps) => {
  const { courseId } = useParams();
  const dispatch = useAppDispatch();
  const topics = useAppSelector((state: RootState) => selectCourseTopics(state, courseId || ''));
  const isUploadingNFT = useAppSelector((state: RootState) => selectIsUploadingNFT(state));

  const { classes } = useStyles();
  const { logo, actionSlot } = props;

  const sell = (): void => {
    dispatch(setUploadingNFT({ isUploading: true }));
    uploadNFT(
      {
        text: JSON.stringify(topics),
      },
      () => dispatch(setUploadingNFT({ isUploading: false })),
      (tokenId) => {
        dispatch(setTokenId({ tokenId }));
        dispatch(setUploadingNFT({ isUploading: false }));
      },
    );
  };

  const openVoiceModal = (): void => {
    dispatch(setVoiceOpen({ isVoiceOpen: true }));
  };

  return (
    <Header height={rem(60)} p="xs" mb={120}>
      <Group position="apart" w="100%" className={classes.header}>
        {logo}
        <Flex gap={10} justify="center" align="center">
          {actionSlot}
          {/* <Button onClick={openVoiceModal}>Озвучить</Button> */}
          <Button loading={isUploadingNFT} onClick={sell}>
            Продать
          </Button>
        </Flex>
      </Group>
    </Header>
  );
};
