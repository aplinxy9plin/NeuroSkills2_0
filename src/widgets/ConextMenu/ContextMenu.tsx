import { Paper, Stack } from '@mantine/core';
import React from 'react';
import { GenerateExplanationButton } from '@/features/GenerateExplanation';

export const ContextMenu = () => {
  return (
    <Paper bg="gray.1">
      <Stack spacing={4}>
        <GenerateExplanationButton />
        <GenerateExplanationButton />
      </Stack>
    </Paper>
  );
};
