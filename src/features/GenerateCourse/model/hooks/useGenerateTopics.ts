import * as uuid from 'uuid';
import { Course } from '@/entities/course';
import { addTopic, Topic, updateTopic } from '@/entities/topic';
import { useAppDispatch, useGptPrompt } from '@/shared/model';
import { getCourseTopicsPrompt } from '../../lib/prompts';

export const useGenerateTopics = () => {
  const dispatch = useAppDispatch();
  const { generate, isGenerating } = useGptPrompt();

  const generateTopics = async (course: Course) => {
    const topics: Topic[] = [];
    const prompt = getCourseTopicsPrompt(course.name, 10);
    let order = 1;
    let topic: Topic = {
      id: uuid.v1(),
      courseId: course.id,
      name: '',
      content: '',
      order,
    };
    dispatch(addTopic(topic));
    await generate(prompt, (chunk: string) => {
      if (chunk.includes('%')) {
        const sides = chunk.split('%');
        topic = { ...topic, name: topic.name + sides[0] };
        dispatch(updateTopic(topic));
        topics.push(topic);
        topic = { ...topic, id: uuid.v1(), name: sides[1], order: (order += 1) };
        dispatch(addTopic(topic));
      } else {
        topic = { ...topic, name: topic.name + chunk };
      }
      dispatch(updateTopic(topic));
    });
    topics.push(topic);
    return topics;
  };

  return { generateTopics, isGenerating };
};
