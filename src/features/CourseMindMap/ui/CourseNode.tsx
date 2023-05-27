import { Button } from '@mantine/core';
import React from 'react';
import { Handle, Position } from 'reactflow';

export const CourseNode = ({ data }: { data: { label: string } }) => {
  return (
    <>
      <Handle type="target" position={Position.Top} />
      <div>
        <Button color="green">{data.label}</Button>
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
    </>
  );
};
