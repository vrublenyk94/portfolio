import { configureStore } from '@reduxjs/toolkit';
import headerReducer from './slices/headerSlice';
import sidepanelReducer from './slices/sidepanelSlice';
import eventReducer from './slices/eventSlice';

const store = configureStore({
  reducer: {
    header: headerReducer,
    sidepanel: sidepanelReducer,
    event: eventReducer
  },
});

export default store;
