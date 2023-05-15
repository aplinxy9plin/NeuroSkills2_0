import { ChatMessage } from '@/entities/chat';

const getChatHistory = (messages: ChatMessage[]) => {
  let history = '';
  for (const msg of messages) {
    const prefix = msg.fromUser ? 'Я написал:' : 'Ты написал:';
    history += prefix + msg.text;
  }
  return history;
};

export const getAssistantPrompt = (topicContent: string, messages: ChatMessage[], newMessage: string) => {
  return `Ты ассистент помощник, который отвечает на вопросы по следующему тексту "${topicContent}"
  Вот история нашего общения: ${getChatHistory(messages)}. Теперь ответь на это: ${newMessage}`;
};
