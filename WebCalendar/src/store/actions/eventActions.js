import { createAction } from "@reduxjs/toolkit";

export const handleEventNameSelect = createAction('event/setEventName', (eventName) => ({
    payload: { eventName }
}));

export const handleEventDateSelect = createAction('event/setEventDate', (eventDate) => ({
    payload: { eventDate }
}));

export const handleStartTime = createAction('event/setStartTime', (startTime) => ({
    payload: { startTime }
}));

export const handleEndTime = createAction('event/setEndTime', (endTime) => ({
    payload: { endTime }
}));

export const handleAllDaySelect = createAction('event/setAllDay', (value) => ({
    payload: { value }
}));

export const handleRepeatSelect = createAction('event/setRepeat', (repeat) => ({
    payload: { repeat }
}));

export const handleCalendarSelect = createAction('event/setSelectedCalendar', (selectedCalendar) => ({
    payload: { selectedCalendar }
}));

export const handleDescriptionSelect = createAction('event/setDescription', (description) => ({
    payload: { description }
}));

