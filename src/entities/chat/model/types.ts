export type Chat = {
  id: string;
  topicId: string;
};

export type ChatMessage = {
  id: string;
  chatId: string;
  text: string;
  fromUser: boolean;
  date: string;
};

export type ChatWithMessages = Chat & {
  messages: ChatMessage[];
};

export type UpdateMessage = Pick<ChatMessage, 'id'> & Partial<Omit<ChatMessage, 'id'>>;

export type UploadPinataJSON = {
  IpfsHash: string;
  PinSize: number;
  Timestamp: string;
};
