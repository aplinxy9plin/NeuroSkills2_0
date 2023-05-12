import { useState } from 'react';
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
        const { content } = JSON.parse(responseChunk).choices[0].delta;
        if (content) {
          response += content;
          if (handleChunk) {
            handleChunk(content);
          }
        }
      },
    );
    setIsGenerating(false);
    setIsFinished(true);
    return response;
  };

  return { generate, isGenerating, isFinished };
};
