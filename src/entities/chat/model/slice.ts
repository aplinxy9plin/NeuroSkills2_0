import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Chat, ChatMessage, UpdateMessage } from './types';

type InitialStateType = {
  chats: Chat[];
  messages: ChatMessage[];
};

const initialState: InitialStateType = {
  chats: [],
  messages: [],
};

export const chatSlice = createSlice({
  name: 'chats',
  initialState,
  reducers: {
    setChats: (state, action: PayloadAction<Chat[]>) => {
      state.chats = action.payload;
    },
    addChat: (state, action: PayloadAction<Chat>) => {
      state.chats.push(action.payload);
    },
    setMessages: (state, action: PayloadAction<ChatMessage[]>) => {
      state.messages = action.payload;
    },
    addMessage: (state, action: PayloadAction<ChatMessage>) => {
      state.messages.push(action.payload);
    },
    updateMessage: (state, action: PayloadAction<UpdateMessage>) => {
      const updated = action.payload;
      const target = state.messages.find((m) => m.id === updated.id);
      const message = { ...target, ...updated } as ChatMessage;
      state.messages = [...state.messages.filter((m) => m.id !== updated.id), message];
    },
  },
});

export const selectChats = (state: RootState) => state.chats.chats;
export const selectChatById = (state: RootState, chatId: string) => {
  return state.chats.chats.find((c) => c.id === chatId);
};

export const selectChatByTopic = (state: RootState, topicId: string) => {
  return state.chats.chats.find((c) => c.topicId === topicId);
};
export const selectMessages = (state: RootState) => state.chats.messages;
export const selectMessagesByChat = (state: RootState, chatId: string) => {
  return state.chats.messages.filter((m) => m.chatId === chatId);
};

export const { setChats, setMessages, addChat, addMessage, updateMessage } = chatSlice.actions;
