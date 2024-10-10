import {useEffect, useState} from 'react';
import { Checkbox, Dropdown, Button, CalendarSelector, Input, Modal, Dateselector, Select } from 'ui-kit-vr/dist/uikit-vr.cjs';
import { useSelector, useDispatch } from 'react-redux';
import { handleEventNameSelect, handleEventDateSelect, handleCalendarSelect, handleDescriptionSelect, handleRepeatSelect, handleStartTime, handleEndTime, handleAllDaySelect} from '../../store/actions/eventActions';
import { addEvent, deleteEvent, resetForm } from '../../store/slices/eventSlice';
import { fullDayNumToReadable } from '../../utils/calendarUtils';
import { generateRepeatingEvents, createTimeOptions } from '../../utils/createEventModalUtils';
import'./createEventModal.css';

const CreateEventModal = ({ modalPosition, setIsVisible, selectedTime, selectedDate, editing, event }) => {
    const [formError, setFormError] = useState('');
    const dispatch = useDispatch();
    const calendars = useSelector(state => state.sidepanel.calendars);
    const startTime = useSelector(state => state.event.startTime);
    const eventDate = useSelector(state => state.event.eventDate);
    const monthNumToReadable = useSelector(state => state.header.monthNumToReadable);
    const checked = useSelector(state => state.event.allDay);
    const eventName = useSelector(state => state.event.eventName);
    const endTime = useSelector(state => state.event.endTime);
    const repeat = useSelector(state => state.event.repeat);
    const selectedCalendar = useSelector(state => state.event.selectedCalendar);
    const description = useSelector(state => state.event.description);
    const events = useSelector(state => state.event.events);

    const [timeOptions, setTimeOptions] = useState([]);
    const eventDay = fullDayNumToReadable[eventDate.getDay()];
    const eventYearAndDate = `${monthNumToReadable[eventDate.getMonth()]} ${eventDate.getDate()}`;

    useEffect(() => {
        createTimeOptions(selectedTime, setTimeOptions);
    }, [selectedTime]);

    useEffect(() => {
        if (editing && event) {
            dispatch(handleEventNameSelect(event.eventName));
            dispatch(handleEventDateSelect(new Date(event.eventDate)));
            dispatch(handleStartTime(event.startTime));
            dispatch(handleEndTime(event.endTime));
            dispatch(handleAllDaySelect(event.allDay));
            dispatch(handleRepeatSelect(event.repeat));
            dispatch(handleCalendarSelect(event.selectedCalendar));
            dispatch(handleDescriptionSelect(event.description));
        }
    }, [editing, event, dispatch]);

    const validateForm = () => {
        if (!checked && (!startTime || !endTime)) {
            setFormError('Required');
            return false;
        }
        setFormError('');
        return true;
    };

    const createEvent = () => {
        const newEvents = generateRepeatingEvents({
            eventName, eventDate, startTime, endTime, allDay: checked, repeat, selectedCalendar, description
        });

        newEvents.forEach(newEvent => dispatch(addEvent(newEvent)));

        dispatch(resetForm());
        setIsVisible(false);
    };

    const editEvent = () => {
        const index = events.findIndex(e => e === event);
        const updatedEvents = generateRepeatingEvents({
            eventName, eventDate, startTime, endTime, allDay: checked, repeat, selectedCalendar, description
        }, eventDay, eventYearAndDate);

        dispatch(deleteEvent(index));
        updatedEvents.forEach(newEvent => dispatch(addEvent(newEvent)));

        setIsVisible(false);
    };

    const confirmEvent = () => {
        if (validateForm()) {
            editing ? editEvent() : createEvent();
        }
    };

    return (
        <Modal
            onClick={() => setIsVisible(false)}
            position='absolute'
            top={modalPosition.top}
            left={modalPosition.left}
            width='522px'
            height='486px'
            title={editing ? 'Edit event' : 'Create event'}
            descr={
                <>
                    <div className="form__wrapper">
                        <div><div className="form-icon form-icon--text"></div></div>
                        <Input
                            type='text'
                            label='title'
                            placeholder='Enter event name'
                            width='456px'
                            value={eventName}
                            onValueChanged={(value) => dispatch(handleEventNameSelect(value))}
                            defaultValue={eventName}
                            errorMessage=''
                        />
                    </div>
                    <div className="form__wrapper">
                        <div><div className="form-icon form-icon--date"></div></div>
                        <Dateselector onChange={(e) => e.stopPropagation} date={selectedDate} onDateChosen={(date) => dispatch(handleEventDateSelect(date))} />
                        <Select
                            label='Time'
                            options={timeOptions}
                            placeholder='Start time'
                            onValueChange={(value) => dispatch(handleStartTime(value))}
                            disabled={checked}
                            errorMessage={formError.includes('Required') ? formError : ''}
                            defaultValue={startTime}
                        />
                        <Select
                            label=''
                            options={timeOptions.filter(item => item > startTime)}
                            placeholder='End time'
                            onValueChange={(value) => dispatch(handleEndTime(value))}
                            disabled={checked}
                            errorMessage={formError.includes('Required') ? formError : ''}
                            defaultValue={endTime}
                        />
                    </div>
                    <div className="form__wrapper form__wrapper--checkbox">
                        <Checkbox
                            label='All day'
                            color='rgb(0, 174, 28)'
                            isChecked={checked}
                            onChange={(value) => dispatch(handleAllDaySelect(value))}
                        />
                        <Dropdown
                            options={['Does not repeat', 'Daily', `Weekly on ${eventDay}`, 'Monthly', `Annually on ${eventYearAndDate} `]}
                            defaultOption={repeat}
                            onValueChange={(value) => dispatch(handleRepeatSelect(value))}
                            width={'175px'}
                        />
                    </div>
                    <div className="form__wrapper">
                        <div><div className="form-icon form-icon--calendar"></div></div>
                        <CalendarSelector
                            options={calendars}
                            onValueChange={(value) => dispatch(handleCalendarSelect(value))}
                            defaultOption={calendars[0]}
                        />
                    </div>
                    <div className="form__wrapper">
                        <div><div className="form-icon form-icon--descr"></div></div>
                        <Input
                            inputType='textarea'
                            label='Description'
                            cols='100'
                            rows='1'
                            width='456px'
                            value={description}
                            defaultValue={description}
                            errorMessage=''
                            onValueChanged={(value) => dispatch(handleDescriptionSelect(value))}
                        />
                    </div>
                    <div className="form__wrapper form__wrapper--btn">
                        <Button type='primary' children='Save' onClick={confirmEvent} />
                    </div>
                </>
            }
        />
    );
};

export default CreateEventModal;
