import { Transition } from '@mantine/core';
import React, { ComponentType, useRef } from 'react';
import { ContextMenuTrigger, useContextMenu } from './hooks';

export const withContextMenu = <T extends object>(
  Component: ComponentType<T>,
  Menu: ComponentType,
  trigger: ContextMenuTrigger,
) => {
  const WithContextMenu = (props: T) => {
    const root = useRef<HTMLDivElement>(null);
    const { visible, rootHandlers } = useContextMenu(root, trigger);

    return (
      <>
        <span {...rootHandlers}>
          <Component {...props} />
        </span>
        <div
          ref={root}
          style={{
            position: 'fixed',
            visibility: visible ? 'visible' : 'hidden',
          }}
        >
          <Menu />
        </div>
      </>
    );
  };

  return WithContextMenu;
};
