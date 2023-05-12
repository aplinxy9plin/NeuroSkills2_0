import * as uuid from 'uuid';
import { addCourse, Course } from '@/entities/course';
import { useAppDispatch } from '@/shared/model';
import { useGenerateDescription } from './useGenerateDescription';
import { useGenerateTopics } from './useGenerateTopics';

export const useGenerateCourse = () => {
  const dispatch = useAppDispatch();
  const { generateDescription } = useGenerateDescription();
  const { generateTopics } = useGenerateTopics();

  const generateCourse = async (courseName: string) => {
    const course: Course = {
      id: uuid.v1(),
      name: courseName,
      description: '',
    };
    dispatch(addCourse(course));
    await generateDescription(course);
    await generateTopics(course);
    // const promises: Promise<void>[] = [];
    // for (let i = 0; i < topics.length; i += 1) {
    //   promises.push(generateTopicContent(topics[i]));
    //   promises.push(generateQuiz(topics[i]));
    // }
    // await Promise.all(promises);
  };

  return { generateCourse };
};
