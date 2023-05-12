import { Flex, Input } from '@mantine/core';
import React, { useState } from 'react';
import { CreateCourseButton } from '@/features/GenerateCourse';

export const NewCourse = () => {
  const [courseName, setCourseName] = useState<string>('Квантовая физика');
  return (
    <Flex>
      <Input placeholder="Your email" value={courseName} onChange={(e) => setCourseName(e.target.value)} />
      <CreateCourseButton courseName={courseName} />
    </Flex>
  );
};
