import { Anchor, Flex, Input } from '@mantine/core';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CreateCourseButton } from '@/features/GenerateCourse';

export const NewCourse = () => {
  const [courseName, setCourseName] = useState<string>('Квантовая физика');
  return (
    <Flex w="100%" direction="column" align="center" gap="lg">
      <Input
        size="lg"
        w="100%"
        radius="xl"
        placeholder="Я хочу изучить...."
        value={courseName}
        onChange={(e) => setCourseName(e.target.value)}
      />
      <CreateCourseButton courseName={courseName} />
    </Flex>
  );
};
