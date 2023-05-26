import { MouseEvent, MouseEventHandler, RefObject, useState } from 'react';

export type ContextMenuTrigger = 'on-text-select' | 'on-right-click';
type CommonRootHandlers = { onClick: MouseEventHandler; onWheel: MouseEventHandler };
type RightClickRootHandlers = CommonRootHandlers & { onContextMenu: MouseEventHandler };
type TextSelectionRootHandlers = CommonRootHandlers & { onMouseUp: MouseEventHandler };
type RootHandlers = RightClickRootHandlers | TextSelectionRootHandlers;
export const useContextMenu = (root: RefObject<HTMLElement>, trigger: ContextMenuTrigger) => {
  const [rootEl] = useState<RefObject<HTMLElement>>(root);
  const [visible, setVisible] = useState(false);

  const setMenuPosition = (x: number, y: number) => {
    const clickX = x;
    const clickY = y;
    const screenW = window.innerWidth;
    const screenH = window.innerHeight;
    const rootW = rootEl!.current!.offsetWidth;
    const rootH = rootEl!.current!.offsetHeight;

    const right = screenW - clickX > rootW;
    const left = !right;
    const top = screenH - clickY > rootH;
    const bottom = !top;

    if (right) {
      rootEl!.current!.style.left = `${clickX + 5}px`;
    }

    if (left) {
      rootEl!.current!.style.left = `${clickX - rootW - 5}px`;
    }

    if (top) {
      rootEl!.current!.style.top = `${clickY + 5}px`;
    }

    if (bottom) {
      rootEl!.current!.style.top = `${clickY - rootH - 5}px`;
    }
  };

  const onClick = () => {
    if (trigger === 'on-right-click') {
      setVisible(false);
      return;
    }
    const text = window.getSelection()?.toString();
    if (!text || text.length === 0) {
      console.log('here click');
      setVisible(false);
    }
  };
  const onWheel = () => {
    setVisible(false);
  };
  const onContextMenu = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setVisible(true);
    if (!rootEl || !rootEl.current) return;
    setMenuPosition(event.clientX, event.clientY);
  };
  const onMouseUp = (event: MouseEvent<HTMLDivElement>) => {
    const text = window.getSelection()?.toString();
    if (text && text.length) {
      setVisible(true);
    }
    if (!rootEl || !rootEl.current) {
      console.log(rootEl);
      console.log('here mouse up');
      return;
    }
    setMenuPosition(event.clientX, event.clientY);
  };

  const rootHandlers: RootHandlers =
    trigger === 'on-right-click' ? { onClick, onWheel, onContextMenu } : { onClick, onWheel, onMouseUp };

  return { visible, rootHandlers };
};
