import { Skeleton } from '@mantine/core';
import React from 'react';

const ParagraphSkeleton = () => {
  return (
    <>
      <Skeleton height={15} mt={6} animate />
      <Skeleton height={15} mt={6} animate />
      <Skeleton height={15} mt={6} animate />
      <Skeleton height={15} mt={6} animate />
      <Skeleton height={15} mt={6} animate width="90%" />
    </>
  );
};

interface TextSkeletonProps {
  paragraphs: number;
}
export const TextSkeleton = (props: TextSkeletonProps) => {
  const { paragraphs } = props;
  const arr = Array.from({ length: paragraphs }, (value, index) => index);
  return (
    <div>
      {arr.map((x) => (
        <ParagraphSkeleton key={x} />
      ))}
    </div>
  );
};
