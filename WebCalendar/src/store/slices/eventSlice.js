import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    eventName: '',
    eventDate: new Date(),
    startTime: '',
    endTime: '',
    allDay: false,
    repeat: 'Does not repeat',
    selectedCalendar: {},
    description: '',
    events: []
}

const eventSlice = createSlice({
    name: 'event',
    initialState,
    reducers: {
        setEventName(state, action) {
            state.eventName = action.payload.eventName;
        },
        setEventDate(state, action) {
            state.eventDate = action.payload.eventDate;
        },
        setStartTime(state, action) {
            state.startTime = action.payload.startTime;
        },
        setEndTime(state, action) {
            state.endTime = action.payload.endTime;
        },
        setAllDay(state, action) {
            state.allDay = action.payload.value;
        },
        setRepeat(state, action) {
            state.repeat = action.payload.repeat;
        },
        setSelectedCalendar(state, action) {
            state.selectedCalendar = action.payload.selectedCalendar;
        },
        setDescription(state, action) {
            state.description = action.payload.description;
        },
        addEvent(state, action) {
            state.events.push(action.payload);
        },
        updateEvents: (state, action) => {
            const { index, event } = action.payload;
            state.events[index] = event;
        },
        deleteEvent: (state, action) => {
            state.events = state.events.filter((_, idx) => idx !== action.payload);
        },
        resetForm(state) {
            state.eventName = '';
            state.eventDate = new Date();
            state.startTime = '';
            state.endTime = '';
            state.allDay = false;
            state.repeat = 'Does not repeat';
            state.selectedCalendar = {};
            state.description = '';
        }
    }
})

export const {
    setEventName, 
    setDescription, 
    setEndTime, 
    setEventDate, 
    addEvent, 
    setRepeat, 
    setSelectedCalendar, 
    setStartTime,
    setAllDay, 
    updateEvents, 
    deleteEvent,
    resetForm
} = eventSlice.actions;

export default eventSlice.reducer;