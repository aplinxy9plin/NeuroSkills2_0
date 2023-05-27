import { Button } from '@mantine/core';
import React from 'react';
import { Handle, Position } from 'reactflow';

export const TopicNode = ({ data }: { data: { label: string } }) => {
  return (
    <>
      <Handle type="target" position={Position.Top} />
      <div>
        <Button>{data.label}</Button>
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
    </>
  );
};
