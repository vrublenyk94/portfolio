import  {useState} from 'react';
import CreateEventModal from '../createEventModal/createEventModal';
import { convertRgbToRgba, calculateEventPosition } from '../../utils/eventUtils';
import { useSelector } from 'react-redux';
import './event.css'

const Event = ({ event, isHovered, onMouseEnter, onMouseLeave, onClick, allDay }) => {
    const { top, height } = calculateEventPosition(event, allDay);
    const rgbaColor = convertRgbToRgba(event.selectedCalendar.color, 0.3);
    const hoverColor = convertRgbToRgba(event.selectedCalendar.color, 0.7);
    const backgroundColor = isHovered ? hoverColor : rgbaColor;
    const borderLeftColor = event.selectedCalendar.color;

    const handleClick = (e) => {
        e.stopPropagation();
        onClick(e, event);
    };

    return (
        <div
            className="calendar__event"
            style={{
                top,
                height,
                backgroundColor,
                borderLeft: `4px solid ${borderLeftColor}`,
            }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={handleClick}
        >
            {event.eventName}
        </div>
    );
};

export default Event;

import {useEffect, useState} from 'react';
import { Checkbox, Dropdown, Button, CalendarSelector, Input, Modal, Dateselector, Select } from 'ui-kit-vr/dist/uikit-vr.cjs';
import { useSelector, useDispatch } from 'react-redux';
import { handleEventNameSelect, handleEventDateSelect, handleCalendarSelect, handleDescriptionSelect, handleRepeatSelect, handleStartTime, handleEndTime, handleAllDaySelect} from '../../store/actions/eventActions';
import { addEvent, updateEvents } from '../../store/slices/eventSlice';
import { fullDayNumToReadable } from '../../utils/calendarUtils';
import'./createEventModal.css';


const CreateEventModal = ({ modalPosition, setVisible, selectedTime, selectedDate, editing, event }) => {
    
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

    const createEvent = () => {
        dispatch(addEvent());
        setVisible(false);
        dispatch(handleEventNameSelect(''));
        dispatch(handleEventDateSelect(new Date()));
        dispatch(handleStartTime(''));
        dispatch(handleEndTime(''));
        dispatch(handleAllDaySelect(''));
        dispatch(handleRepeatSelect(''));
        dispatch(handleCalendarSelect(''));
        dispatch(handleDescriptionSelect(''));
    };

    const editEvent = () => {
        const index = events.findIndex(e => e === event);
        dispatch(updateEvents({ index, event: { eventName, eventDate, startTime, endTime, allDay: checked, repeat, selectedCalendar, description } }));
        setVisible(false);
    };

    useEffect(() => {
        createTimeOptions(selectedTime);
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

    const createTimeOptions = (startHour) => {
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

    return (
        <>
            <Modal 
                onClick={() => setVisible(false)} 
                position='absolute' 
                top={modalPosition.top} 
                left={modalPosition.left} 
                width={'522px'} 
                height={'486px'}
                title={editing ? 'Edit event' : 'Create event'}
                descr={
                    <>
                        <div className="form__wrapper">
                            <div><div className="form-icon form-icon--text"></div></div>
                            <Input 
                                type={'text'}
                                label={'title'}
                                placeholder={'Enter event name'}
                                width={'456px'}
                                value={useSelector(state => state.event.eventName)}
                                onValueChanged={(value) => dispatch(handleEventNameSelect(value))}
                            />
                        </div>
                        <div className="form__wrapper">
                            <div><div className="form-icon form-icon--date"></div></div>
                            <Dateselector date={selectedDate} onDateChosen={(date) => dispatch(handleEventDateSelect(date))}/>
                            <Select label={'Time'} options={timeOptions} placeholder={'Start time'} onValueChange={(value) => dispatch(handleStartTime(value))} disabled={false}/>
                            <Select label={''} options={timeOptions.filter(item => item > startTime )} placeholder={'End time'} onValueChange={(value) => dispatch(handleEndTime(value))} disabled={false} />
                        </div>
                        <div className="form__wrapper form__wrapper--checkbox">
                            <Checkbox label={'All day'} color={'rgb(0, 174, 28)'} isChecked={checked} onChange={(value) => dispatch(handleAllDaySelect(value))}/>
                            <Dropdown options={['Does not repeat', 'Daily', `Weekly on ${eventDay}`, 'Monthly', `Annually on ${eventYearAndDate} `]} defaultOption={'Does not repeat'} onValueChange={(value) => dispatch(handleRepeatSelect(value))} width={'175px'} />
                        </div>

                        <div className="form__wrapper">
                            <div><div className="form-icon form-icon--calendar"></div></div>
                            <CalendarSelector options={calendars} onValueChange={(value) => dispatch(handleCalendarSelect(value))} />
                        </div>
                        <div className="form__wrapper">
                            <div><div className="form-icon form-icon--descr"></div></div>
                            <Input inputType='textarea' label={'Description'} cols='100' rows='1' width={'456px'} onValueChanged={(value) => dispatch(handleDescriptionSelect(value))}/>
                        </div>
                        <div className="form__wrapper form__wrapper--btn">
                            <Button type='primary' children={'Save'} onClick={editing ? editEvent : createEvent} />
                        </div>
                    </>
                }
            />
        </>
    );
};

export default CreateEventModal;

import React,{useState} from 'react';
import CreateEventModal from '../createEventModal/createEventModal';
import Event from '../event/event';
import { useSelector } from 'react-redux';
import { timestamps } from '../../utils/calendarUtils';
import './weekView.css'

const WeekView = ({ week, today, month, year, days }) => {
    const events = useSelector(state => state.event.events);
    const [hoveredEvent, setHoveredEvent] = useState(null);
    const [visible, setVisible] = useState(false);
    const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
    const [selectedTime, setSelectedTime] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [editingEvent, setEditingEvent] = useState(null);

    const handleClick = (e, date, hourIndex, eventObject = null) => {

        const rect = e.target.getBoundingClientRect();
        const modalWidth = 522;
        const modalHeight = 466;

        if (rect.x < 900) {
            if (rect.y > 400) {
                setModalPosition({ top: rect.top - (modalHeight + rect.height), left: rect.left - rect.width });
            } else {
                setModalPosition({ top: rect.top - rect.height, left: rect.left - rect.width });
            }
        } else {
            if (rect.y > 450) {
                setModalPosition({ top: rect.top - (modalHeight + rect.height), left: rect.left - ((modalWidth + rect.width) * 1.2) });
            } else {
                setModalPosition({ top: rect.top - rect.height, left: rect.left - ((modalWidth + rect.width) * 1.2) });
            }
        }

        if (e.target.classList.contains('day-hour')) {
            setEditingEvent(null);
        } else if (e.target.classList.contains('calendar__event')) {
            setEditingEvent(eventObject);
        }

        setSelectedDate(date);
        setSelectedTime(hourIndex);
        setVisible(true);
    };

    return (
        <div className='weekView'>
            <div className="weekView__header">
                <div className="weekday-header empty-header"></div>
                {days.map((day, index) => (
                    <div key={index} className={`weekday-header`}>
                        <div className="weekday-wrapper">
                            <div className={week[index].getDate() === today && week[index].getMonth() === month && week[index].getFullYear() === year ? 'header-today' : 'header-other'}>
                                <div className={`day`}>{week[index].getDate()}</div>
                                <div className='weekday'>{day}</div>
                            </div>
                            {events.filter(event => {
                                const eventDate = new Date(event.eventDate);
                                return event.allDay && eventDate.getDate() === week[index].getDate() &&
                                    eventDate.getMonth() === week[index].getMonth() &&
                                    eventDate.getFullYear() === week[index].getFullYear();
                            }).map((event, eventIndex) => (
                                event.allDay && (
                                    <div className="weekday-event" key={eventIndex}>
                                        <Event
                                            allDay={true}
                                            event={event}
                                            isHovered={hoveredEvent === event}
                                            onMouseEnter={() => setHoveredEvent(event)}
                                            onMouseLeave={() => setHoveredEvent(null)}
                                            onClick={(e) => handleClick(e, week[index], null, event)}
                                        />
                                    </div>
                                )
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="weekView__wrapper">
                <div className="weekView__timestamps">
                    {timestamps.map((item, index) => (
                        <div className="timestamp" key={index}>
                            {item}
                        </div>
                    ))}
                </div>
                <div className="weekdays-content">
                    {Array.from({ length: 24 }).map((_, hourIndex) => (
                        <React.Fragment key={hourIndex}>
                            {week.map((dayInfo, dayIndex) => (
                                <div
                                    key={`${dayIndex}-${hourIndex}`}
                                    className={`day-hour ${dayInfo.getDate()}.${dayInfo.getMonth()}-${hourIndex}`}
                                    onClick={(e) => handleClick(e, dayInfo, hourIndex)}
                                >
                                    {events.filter(event => {
                                        const eventDate = new Date(event.eventDate);
                                        return !event.allDay && eventDate.getDate() === dayInfo.getDate() &&
                                            eventDate.getMonth() === dayInfo.getMonth() &&
                                            eventDate.getFullYear() === dayInfo.getFullYear();
                                    }).map((event, eventIndex) => (
                                        parseInt(event.startTime.split(':')[0], 10) === hourIndex && (
                                            <Event
                                                allDay={false}
                                                key={eventIndex}
                                                event={event}
                                                isHovered={hoveredEvent === event}
                                                onMouseEnter={() => setHoveredEvent(event)}
                                                onMouseLeave={() => setHoveredEvent(null)}
                                                onClick={(e) => handleClick(e, dayInfo, hourIndex, event)}
                                            />
                                        )
                                    ))}
                                </div>
                            ))}
                        </React.Fragment>
                    ))}
                </div>
            </div>
            {visible && (
                <CreateEventModal
                    modalPosition={modalPosition}
                    setVisible={setVisible}
                    selectedTime={selectedTime}
                    selectedDate={selectedDate}
                    editing={editingEvent !== null}
                    event={editingEvent}
                />
            )}
        </div>
    );
};

export default WeekView;
