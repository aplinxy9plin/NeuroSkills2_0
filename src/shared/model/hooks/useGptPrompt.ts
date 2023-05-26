import { useState } from 'react';
import { fetchStreamedChat } from 'streamed-chatgpt-api';

export const useGptPrompt = () => {
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const generate = async (prompt: string, handleChunk?: (ch: string) => void) => {
    let response = '';
    setIsGenerating(true);
    const key = import.meta.env.VITE_OPEN_AI_API_KEY;
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
