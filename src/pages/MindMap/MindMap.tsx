import React from 'react';
import { useParams } from 'react-router-dom';
import { CourseMindMap } from '@/features/CourseMindMap';

export const MindMap = () => {
  const { courseId } = useParams();
  return <CourseMindMap courseId={courseId || ''} />;
};
