import { configureStore } from '@reduxjs/toolkit';
import gameSlice from './slices/game/gameSlice';
import chatSlice from './slices/chat/chatSlice';
const store = configureStore({
  reducer: {
    game: gameSlice,
    chat: chatSlice
  },
});

export default store;