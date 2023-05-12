export type Chat = {
  id: string;
  topicId: string;
  messages: ChatMessage[];
};

export type ChatMessage = {
  id: string;
  chatId: string;
  text: string;
  fromUser: boolean;
  date: Date;
};
