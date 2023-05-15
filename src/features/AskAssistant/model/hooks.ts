import * as uuid from 'uuid';
import {
  addMessage,
  ChatMessage,
  selectChatByTopic,
  selectMessagesByChat,
  updateMessage,
  UpdateMessage,
} from '@/entities/chat';
import { selectTopicById } from '@/entities/topic';
import { useAppDispatch, useAppSelector, useGptPrompt } from '@/shared/model';
import { getAssistantPrompt } from '../lib/prompt';

export const useAssistant = (topicId: string) => {
  const dispatch = useAppDispatch();
  const topic = useAppSelector((state: RootState) => selectTopicById(state, topicId));
  const chat = useAppSelector((state: RootState) => selectChatByTopic(state, topicId));
  const messages = useAppSelector((state: RootState) => selectMessagesByChat(state, chat?.id || ''));
  const { generate, isGenerating } = useGptPrompt();
  const ask = async (question: string) => {
    if (!chat || !topic) return;
    const message: ChatMessage = {
      id: uuid.v1(),
      chatId: chat.id,
      text: question,
      fromUser: true,
      date: new Date().getTime().toString(),
    };
    dispatch(addMessage(message));
    const assistMessage: ChatMessage = {
      id: uuid.v1(),
      chatId: chat.id,
      text: '',
      fromUser: false,
      date: new Date().getTime().toString(),
    };
    dispatch(addMessage(assistMessage));
    let updateAssistMessage: UpdateMessage = { id: assistMessage.id, text: assistMessage.text };
    const prompt = getAssistantPrompt(topic.content, messages, question);
    await generate(prompt, (chunk) => {
      updateAssistMessage = { ...updateAssistMessage, text: updateAssistMessage.text + chunk };
      dispatch(updateMessage(updateAssistMessage));
    });
  };

  return { ask, messages, isGenerating };
};
