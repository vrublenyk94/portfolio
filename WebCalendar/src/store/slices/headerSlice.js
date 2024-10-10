import { createSlice } from '@reduxjs/toolkit';
import { handlePrevPeriod, handleNextPeriod, handleCurrentDate } from '../actions/headerActions';

const initialState = {
  user: null,
  currentDate: new Date(),
  selectedDate: new Date(),
  monthNumToReadable: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  view: 'Week'
};

const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload
    },
    setCurrentDate(state, action) {
      state.currentDate = action.payload;
    },
    setSelectedDate(state, action) {
      state.selectedDate = action.payload;
    },
    setView(state, action) {
      state.view = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(handlePrevPeriod, (state, action) => {
      state.selectedDate = action.payload.selectedDate;
    })
    .addCase(handleNextPeriod, (state, action) => {
      state.selectedDate = action.payload.selectedDate;
    })
    .addCase(handleCurrentDate, (state, action) => {
      state.selectedDate = action.payload.selectedDate;
    });
  },
});

export const { setCurrentDate, setSelectedDate, setView, setUser } = headerSlice.actions;
export default headerSlice.reducer;