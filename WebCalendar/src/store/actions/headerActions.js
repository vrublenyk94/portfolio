import { createAction } from '@reduxjs/toolkit';

export const handlePrevPeriod = createAction('HEADER/CHANGE_MONTH_TO_PREVIOUS_BY_CLICK', (selectedDate, view) => {
  let newSelectedDate;
  if (view === 'Month') {
    const prevMonth = (selectedDate.getMonth() - 1 + 12) % 12;
    const year = prevMonth === 11 ? selectedDate.getFullYear() - 1 : selectedDate.getFullYear();
    newSelectedDate = new Date(year, prevMonth, 1);
  } else if (view === 'Week') {
    newSelectedDate = new Date(selectedDate);
    newSelectedDate.setDate(selectedDate.getDate() - 7);
  } else {
    newSelectedDate = new Date(selectedDate);
    newSelectedDate.setDate(selectedDate.getDate() - 1);
  }

  return {
    payload: {
      selectedDate: newSelectedDate,
    },
  };
});

export const handleNextPeriod = createAction('HEADER/CHANGE_MONTH_TO_NEXT_BY_CLICK', (selectedDate, view) => {
  let newSelectedDate;
  if (view === 'Month') {
    const prevMonth = (selectedDate.getMonth() + 1 ) % 12;
    const year = prevMonth === 11 ? selectedDate.getFullYear() - 1 : selectedDate.getFullYear();
    newSelectedDate = new Date(year, prevMonth, 1);
  } else if ( view === 'Week') {
    newSelectedDate = new Date(selectedDate);
    newSelectedDate.setDate(selectedDate.getDate() + 7);
  } else {
    newSelectedDate = new Date(selectedDate);
    newSelectedDate.setDate(selectedDate.getDate() + 1);
  }

  return {
    payload: {
      selectedDate: newSelectedDate,
    },
  };
});

export const handleCurrentDate = createAction('HEADER/CHANGE_DATE_TO_CURRENT_BY_CLICK', (currentDate) => {
  return {
    payload: {
      selectedDate: currentDate,
    },
  };
});