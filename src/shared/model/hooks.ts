import { MouseEvent, MouseEventHandler, RefObject, useState } from 'react';
import { useSelector, type TypedUseSelectorHook, useDispatch } from 'react-redux';
import { fetchStreamedChat } from 'streamed-chatgpt-api';

export const useAppDispatch = useDispatch<AppDispatch>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useGptPrompt = () => {
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const generate = async (prompt: string, handleChunk?: (ch: string) => void) => {
    let response = '';
    setIsGenerating(true);
    const key = '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';
    const messages = [{ role: 'user', content: prompt }];
    await fetchStreamedChat(
      {
        apiKey: key,
        messageInput: messages,
        model: 'gpt-3.5-turbo',
        temperature: 0.2,
      },
      (responseChunk: string) => {
        try {
          const { content } = JSON.parse(responseChunk).choices[0].delta;
          if (content) {
            response += content;
            if (handleChunk) {
              handleChunk(content);
            }
          }
        } catch (e) {
          console.log(e, responseChunk);
        }
      },
    );
    setIsGenerating(false);
    setIsFinished(true);
    return response;
  };

  return { generate, isGenerating, isFinished };
};

type ContextMenuTrigger = 'on-text-select' | 'on-right-click';
type CommonRootHandlers = { onClick: MouseEventHandler; onWheel: MouseEventHandler };
type RootHandlers =
  | (CommonRootHandlers & { onMouseUp: MouseEventHandler })
  | (CommonRootHandlers & { onContextMenu: MouseEventHandler });
export const useContextMenu = (root: RefObject<HTMLElement>, trigger: ContextMenuTrigger) => {
  const [visible, setVisible] = useState(false);

  const setMenuPosition = (x: number, y: number) => {
    const clickX = x;
    const clickY = y;
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
    event.preventDefault();
    setVisible(true);
    if (!root || !root.current) return;
    setMenuPosition(event.clientX, event.clientY);
  };
  const onMouseUp = () => (event: MouseEvent<HTMLDivElement>) => {
    const text = window.getSelection()?.toString();
    if (text && text.length) {
      setVisible(true);
    }

    setMenuPosition(event.clientX, event.clientY);
  };

  const rootHandlers: RootHandlers =
    trigger === 'on-right-click' ? { onClick, onWheel, onContextMenu } : { onClick, onWheel, onMouseUp };

  return { visible, rootHandlers };
};
