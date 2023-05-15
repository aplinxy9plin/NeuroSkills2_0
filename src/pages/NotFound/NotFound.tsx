import { Button, SimpleGrid, Title, Text, Image, Center, Container } from '@mantine/core';
import React from 'react';
import { Link } from 'react-router-dom';
import image from './404.svg';
import { useStyles } from './NotFound.style';

export const NotFound = () => {
  const { classes } = useStyles();
  return (
    <Center h="100%">
      <Container>
        <SimpleGrid spacing={80} cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1, spacing: 40 }]}>
          <Image src={image} className={classes.mobileImage} />
          <div>
            <Title className={classes.title}>Что-то пошло не так...</Title>
            <Text color="dimmed" size="lg">
              Страница, которую вы пытаетесь открыть, не существует. Возможно, вы ошиблись адресом или страница была
              перемещена.
            </Text>
            <Link to="/">
              <Button variant="outline" size="md" mt="xl" className={classes.control}>
                Вернуться на главную страницу
              </Button>
            </Link>
          </div>
          <Image src={image} className={classes.desktopImage} />
        </SimpleGrid>
      </Container>
    </Center>
  );
};

export default NotFound;
