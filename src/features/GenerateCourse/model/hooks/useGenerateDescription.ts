import { Course, updateCourse } from '@/entities/course';
import { useAppDispatch, useGptPrompt } from '@/shared/model';
import { getDescriptionPrompt } from '../../lib/prompts';

export const useGenerateDescription = () => {
  const dispatch = useAppDispatch();
  const { generate, isGenerating } = useGptPrompt();

  const generateDescription = async (course: Course) => {
    const prompt = getDescriptionPrompt(course?.name || '');
    await generate(prompt, (chunk) => {
      course = { ...course, description: course.description + chunk };
      dispatch(updateCourse(course));
    });
  };

  return { generateDescription, isGenerating };
};
