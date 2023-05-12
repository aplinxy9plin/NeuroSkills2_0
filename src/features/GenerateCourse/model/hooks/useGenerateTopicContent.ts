import { Topic, updateTopic, UpdateTopic } from '@/entities/topic';
import { useAppDispatch, useGptPrompt } from '@/shared/model';
import { getTopicPrompt } from '../../lib/prompts';

export const useGenerateTopicContent = () => {
  const dispatch = useAppDispatch();
  const { generate, isGenerating } = useGptPrompt();

  const generateTopicContent = async (topic: Topic) => {
    const prompt = getTopicPrompt(topic.name);
    let updTopic: UpdateTopic = { id: topic.id, content: topic.content };
    await generate(prompt, (chunk: string) => {
      updTopic = { ...updTopic, content: updTopic.content + chunk };
      dispatch(updateTopic(updTopic));
    });
  };

  return { generateTopicContent, isGenerating };
};
