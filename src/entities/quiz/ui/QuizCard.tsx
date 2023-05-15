import { Button, Flex, Stack, Text, Title } from '@mantine/core';
import React, { useState } from 'react';
import { Quiz, QuizAnswer } from '../model';

interface QuizOptionItemProps {
  text: string;
  variant: QuizAnswer;
  answer: QuizAnswer;
}
const QuizOptionItem = (props: QuizOptionItemProps) => {
  const [clicked, setClicked] = useState(false);
  const { text, variant, answer } = props;

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <Flex gap={20} align="center">
      {!clicked && (
        <Button onClick={handleClick} variant="filled">
          <Text tt="uppercase">{variant}</Text>
        </Button>
      )}
      {clicked && (
        <Button variant="filled" color={answer === variant ? 'green' : 'red'}>
          <Text tt="uppercase">{variant}</Text>
        </Button>
      )}
      <Text size="md">{text}</Text>
    </Flex>
  );
};

interface QuizCardProps {
  quiz: Quiz;
}
export const QuizCard = (props: QuizCardProps) => {
  const { quiz } = props;
  return (
    <Stack>
      <Title order={3}>{quiz.question}</Title>
      <Stack>
        <QuizOptionItem text={quiz.options.a} variant="a" answer={quiz.answer} />
        <QuizOptionItem text={quiz.options.b} variant="b" answer={quiz.answer} />
        <QuizOptionItem text={quiz.options.c} variant="c" answer={quiz.answer} />
      </Stack>
    </Stack>
  );
};
