import React from 'react';
import * as uuid from 'uuid';
import { Quiz, setQuizzes } from '@/entities/quiz';
import { Topic } from '@/entities/topic';
import { useAppDispatch, useGptPrompt } from '@/shared/model';
import { getQuizPrompt } from '../../lib/prompts';

export const useGenerateTopicQuiz = () => {
  const dispatch = useAppDispatch();
  const { generate, isGenerating } = useGptPrompt();

  const generateQuiz = async (topic: Topic) => {
    const prompt = getQuizPrompt(topic.name);
    const response = await generate(prompt);
    const quizzes: Quiz[] = JSON.parse(response);
    let order = 1;
    for (const quiz of quizzes) {
      quiz.id = uuid.v4();
      quiz.topicId = topic.id;
      quiz.completed = false;
      quiz.order = order;
      order += 1;
    }
    dispatch(setQuizzes(quizzes));
  };

  return { generateQuiz, isGenerating };
};
