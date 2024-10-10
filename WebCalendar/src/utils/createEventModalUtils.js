export const generateRepeatingEvents = (event, eventDay, eventYearAndDate) => {
    const events = [];
    const repeatOption = event.repeat;
    const initialDate = new Date(event.eventDate);

    if (repeatOption === 'Daily') {
        for (let i = 0; i < 365; i++) {
            const newEvent = { ...event, eventDate: new Date(initialDate) };
            newEvent.eventDate.setDate(initialDate.getDate() + i);
            events.push(newEvent);
        }
    } else if (repeatOption === `Weekly on ${eventDay}`) {
        for (let i = 0; i < 52; i++) {
            const newEvent = { ...event, eventDate: new Date(initialDate) };
            newEvent.eventDate.setDate(initialDate.getDate() + i * 7);
            events.push(newEvent);
        }
    } else if (repeatOption === `Annually on ${eventYearAndDate}`) {
        for (let i = 1; i <= 5; i++) {
            const newEvent = { ...event, eventDate: new Date(initialDate) };
            newEvent.eventDate.setFullYear(initialDate.getFullYear() + i);
            events.push(newEvent);
        }
    } else if (repeatOption === 'Monthly') {
        for (let i = 0; i < 12; i++) {
            const newEvent = { ...event, eventDate: new Date(initialDate)};
            newEvent.eventDate.setMonth(initialDate.getMonth() + i);
            events.push(newEvent);
        }
    } else {
        events.push(event);
    }

    return events;
};

export const createTimeOptions = (startHour, setTimeOptions) => {
    const options = [];
    for (let i = startHour; i < 24; i++) {
        if (i < 12) {
            options.push(`${i}:00 am`);
            options.push(`${i}:15 am`);
            options.push(`${i}:30 am`);
            options.push(`${i}:45 am`);
        } else {
            options.push(`${i}:00 pm`);
            options.push(`${i}:15 pm`);
            options.push(`${i}:30 pm`);
            options.push(`${i}:45 pm`);
        }
    }
    setTimeOptions(options);
};