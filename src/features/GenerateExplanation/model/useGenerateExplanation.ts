import { useGptPrompt } from '@/shared/model';

export const useGenerateExplanation = () => {
  const { generate } = useGptPrompt();

  const explain = async (what: string, handleChunk: (chunk: string) => void) => {
    await generate(what, handleChunk);
  };

  return { explain };
};
