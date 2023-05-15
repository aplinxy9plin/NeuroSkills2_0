import { Course, UpdateCourse, updateCourse } from '@/entities/course';
import { useAppDispatch, useGptPrompt } from '@/shared/model';
import { getDescriptionPrompt } from '../../lib/prompts';

export const useGenerateDescription = () => {
  const dispatch = useAppDispatch();
  const { generate, isGenerating } = useGptPrompt();

  const generateDescription = async (course: Course) => {
    const prompt = getDescriptionPrompt(course?.name || '');
    let updCourse: UpdateCourse = { id: course.id, description: course.description };
    await generate(prompt, (chunk) => {
      updCourse = { ...updCourse, description: updCourse.description + chunk };
      dispatch(updateCourse(updCourse));
    });
  };

  return { generateDescription, isGenerating };
};
