import { Button, Flex, Modal, useMantineTheme } from '@mantine/core';
import { Link } from 'react-router-dom';
import { clearTokenId, selectTokenId } from '@/entities/chat/model/slice';
import { useAppDispatch, useAppSelector } from '@/shared/model';
import CheckedIcon from './checked.svg';

export const CreatedNFT = () => {
  const tokenId = useAppSelector((state: RootState) => selectTokenId(state));
  const dispatch = useAppDispatch();
  const theme = useMantineTheme();
  const close = () => {
    dispatch(clearTokenId());
  };

  const contractAddress = '0xdF2e58FCe5Bfaf95f5D9E14735d5EeDaC505978F' || import.meta.env.VITE_CONTRACT_ADDRESS;
  const uri = `https://testnets.opensea.io/assets/goerli/${contractAddress}/`;

  return (
    <Modal
      opened={Boolean(tokenId)}
      onClose={close}
      overlayProps={{
        color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2],
        opacity: 0.55,
        blur: 3,
      }}
      centered
    >
      <Flex align="center" justify="center">
        <div style={{ textAlign: 'center' }}>
          <Flex align="center" justify="center">
            <img src={CheckedIcon} alt="checked-icon" />
          </Flex>
          <Flex align="center" justify="center" mb={16}>
            <span>
              Успешно создано!{' '}
              <Link target="_blank" to={uri + tokenId} style={{ color: '#228be6' }}>
                Открыть ссылку
              </Link>
            </span>
          </Flex>
          <Button>Ok</Button>
        </div>
      </Flex>
    </Modal>
  );
};
