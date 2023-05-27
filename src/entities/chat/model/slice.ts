import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Chat, ChatMessage, UpdateMessage } from './types';

type InitialStateType = {
  chats: Chat[];
  messages: ChatMessage[];
  tokenId?: string;
  isUploadingNFT: boolean;
  isVoiceOpen: boolean;
};

const initialState: InitialStateType = {
  chats: [],
  messages: [],
  tokenId: undefined,
  isUploadingNFT: false,
  isVoiceOpen: false,
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
    setTokenId: (state, action: PayloadAction<{ tokenId: string }>) => {
      state.tokenId = String(action.payload.tokenId);
      console.log(state.tokenId);
    },
    setUploadingNFT: (state, action: PayloadAction<{ isUploading: boolean }>) => {
      state.isUploadingNFT = action.payload.isUploading;
    },
    setVoiceOpen: (state, action: PayloadAction<{ isVoiceOpen: boolean }>) => {
      state.isVoiceOpen = action.payload.isVoiceOpen;
    },
    clearTokenId: (state) => {
      state.tokenId = undefined;
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

export const selectTokenId = (state: RootState) => state.chats.tokenId;
export const selectIsUploadingNFT = (state: RootState) => state.chats.isUploadingNFT;

export const selectOpenVoice = (state: RootState) => state.chats.isVoiceOpen;

export const {
  setChats,
  setMessages,
  addChat,
  addMessage,
  updateMessage,
  setTokenId,
  setUploadingNFT,
  setVoiceOpen,
  clearTokenId,
} = chatSlice.actions;
