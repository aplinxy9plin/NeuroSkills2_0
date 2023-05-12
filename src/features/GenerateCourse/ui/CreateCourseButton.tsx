import { ActionIcon, Button } from '@mantine/core';
import React from 'react';
import { FaGraduationCap } from 'react-icons/all';
import { useNavigate } from 'react-router-dom';
import { useGenerateCourse } from '../model';

interface CreateCourseButtonProps {
  courseName: string;
}

export const CreateCourseButton = (props: CreateCourseButtonProps) => {
  const { courseName } = props;
  const redirect = useNavigate();
  const { generateCourse } = useGenerateCourse();

  const handleClick = async () => {
    redirect('/profile');
    await generateCourse(courseName);
  };

  return (
    <Button
      leftIcon={<FaGraduationCap size="1.5rem" />}
      size="lg"
      radius="lg"
      w="50%"
      disabled={courseName.length === 0}
      onClick={handleClick}
    >
      Начать
    </Button>
  );
};
