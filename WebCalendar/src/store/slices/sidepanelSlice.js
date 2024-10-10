import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    calendarColors : [
        'rgb(159, 41, 87)',
        'rgb(217, 0, 86)',
        'rgb(226, 93, 51)',
        'rgb(223, 196, 90)',
        'rgb(184, 196, 47)',
        'rgb(22, 175, 110)',
        'rgb(66, 148, 136)',
        'rgb(57, 126, 73)',
        'rgb(67, 155, 223)',
        'rgb(66, 84, 175)',
        'rgb(108, 122, 196)',
        'rgb(131, 50, 164)'
    ],
    calendars : [{'color': 'rgb(0, 174, 28)', 'name': 'User calendar', 'canBeDeleted': false, 'eventsVisible': true}]
}

const sidepanelSlice = createSlice({
    name: 'sidepanel',
    initialState,
    reducers: {
        addCalendar: (state, action) => {
            state.calendars.push(action.payload);
        },
        updateCalendar: (state, action) => {
            const { index, calendar } = action.payload;
            state.calendars[index] = calendar;
        },
        deleteCalendar: (state, action) => {
            state.calendars = state.calendars.filter((_, idx) => idx !== action.payload);
        },
        setEventsVisible: (state, action) => {
            const { index, value } = action.payload;
            state.calendars[index].eventsVisible = value;
        }
    }
})

export const { addCalendar, updateCalendar, deleteCalendar, setEventsVisible } = sidepanelSlice.actions;

export default sidepanelSlice.reducer