import { ActionIcon } from '@mantine/core';
import React from 'react';
import { FaGraduationCap } from 'react-icons/all';
import { useGenerateCourse } from '../model';

interface CreateCourseButtonProps {
  courseName: string;
}

export const CreateCourseButton = (props: CreateCourseButtonProps) => {
  const { courseName } = props;
  const { generateCourse } = useGenerateCourse();

  const handleClick = async () => {
    await generateCourse(courseName);
  };

  return (
    <ActionIcon disabled={courseName.length === 0} variant="filled" onClick={handleClick}>
      <FaGraduationCap />
    </ActionIcon>
  );
};
