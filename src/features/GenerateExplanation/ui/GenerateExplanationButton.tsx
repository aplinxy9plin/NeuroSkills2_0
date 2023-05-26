import { ActionIcon, Button, Popover, Text } from '@mantine/core';
import { useTextSelection } from '@mantine/hooks';
import React, { useState } from 'react';
import { BsQuestionCircleFill } from 'react-icons/all';
import { getExplanationPrompt } from '../lib/prompt';
import { useGenerateExplanation } from '../model/useGenerateExplanation';

export const GenerateExplanationButton = () => {
  const [explanation, setExplanation] = useState('');
  const [opened, setOpened] = useState(false);
  const selectedText = useTextSelection();
  const { explain } = useGenerateExplanation();

  const handleClick = async () => {
    if (!selectedText) return;
    setOpened(true);
    const prompt = getExplanationPrompt(selectedText.toString());
    await explain(prompt, (chunk) => {
      setExplanation((prev) => prev + chunk);
    });
  };

  const onPopoverClose = () => {
    setOpened(false);
    setExplanation('');
  };

  return (
    <Popover width={500} position="bottom" withArrow shadow="md" opened={opened} onClose={onPopoverClose}>
      <Popover.Target>
        <Button
          variant="subtle"
          onClick={handleClick}
          leftIcon={<BsQuestionCircleFill size="1.7rem" color="#339AF0" />}
        >
          Объяснить
        </Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text>{explanation}</Text>
      </Popover.Dropdown>
    </Popover>
  );
};
