import React, { ComponentType, MouseEvent, ReactNode, useRef, useState } from 'react';

export const withContextMenu = <T,>(Component: ComponentType<T>, Menu: ComponentType) => {
  const WithContextMenu = (props: T) => {
    const root = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);
    const onClick = () => {
      const text = window.getSelection()?.toString();
      if (!text || text.length === 0) {
        setVisible(false);
      }
    };
    const onWheel = () => {
      setVisible(false);
    };
    const onContextMenu = (event: MouseEvent<HTMLDivElement>) => {
      const text = window.getSelection()?.toString();
      if (text && text.length) {
        setVisible(true);
      }
      // event.preventDefault();
      // setVisible(true);
      // if (!root || !root.current) return;
      const clickX = event.clientX;
      const clickY = event.clientY;
      const screenW = window.innerWidth;
      const screenH = window.innerHeight;
      const rootW = root!.current!.offsetWidth;
      const rootH = root!.current!.offsetHeight;

      const right = screenW - clickX > rootW;
      const left = !right;
      const top = screenH - clickY > rootH;
      const bottom = !top;

      if (right) {
        root!.current!.style.left = `${clickX + 5}px`;
      }

      if (left) {
        root!.current!.style.left = `${clickX - rootW - 5}px`;
      }

      if (top) {
        root!.current!.style.top = `${clickY + 5}px`;
      }

      if (bottom) {
        root!.current!.style.top = `${clickY - rootH - 5}px`;
      }
    };

    return (
      <>
        <Component onClick={onClick} onWheel={onWheel} onContextMenu={onContextMenu} {...props} />
        <Menu />
      </>
    );
  };

  return WithContextMenu;
};
