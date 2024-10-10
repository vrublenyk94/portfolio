import {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CreateEventModal from '../createEventModal/createEventModal';
import Event from '../event/event';
import { generateTimestamps } from '../../utils/calendarUtils';
import { dayNumToReadable } from '../../utils/calendarUtils';
import './dayView.css'
import { resetForm } from '../../store/slices/eventSlice';

const DayView = ({date}) => {
    const dispatch = useDispatch();
    const [isVisible, setIsVisible] = useState(false);
    const [modalPosition, setModalPosition] = useState({ top: '22%', left: '30%' });
    const [selectedTime, setSelectedTime] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [editingEvent, setEditingEvent] = useState(null);
    const [duplicateEvents, setDuplicateEvents] = useState({});
    const events = useSelector(state => state.event.events || []);
    const calendars = useSelector(state => state.sidepanel.calendars)
    const [hoveredEvent, setHoveredEvent] = useState(null);
    
    const handleClick = (e, date, hourIndex, eventObject = null) => {
        if(e.target.classList.contains('day__hour')){
            dispatch(resetForm())
        }
        setIsVisible(!e.target.classList.contains('calendar__event'));
        setEditingEvent(eventObject);
        setSelectedDate(date);
        setSelectedTime(hourIndex);
    };

    const filteredEvents = events.filter(event => {
        const calendar = calendars.find(cal => cal.name === event.selectedCalendar.name);
        return calendar?.eventsVisible;
    });
    
    useEffect(() => {
        const duplicates = findDuplicateEvents(filteredEvents);
        setDuplicateEvents(duplicates);
    }, [events]);

    const findDuplicateEvents = (events) => {
        const eventCounts = {};

        events.forEach(event => {
            const eventDate = new Date(event.eventDate).toISOString().split('T')[0];
            const key = `${eventDate}-${event.startTime}-${event.endTime}`;

            if (eventCounts[key]) {
                eventCounts[key].count += 1;
                eventCounts[key].events.push(event);
            } else {
                eventCounts[key] = { count: 1, events: [event] };
            }
        });

        return eventCounts;
    };

    return (
        <div className='dayView'>
            <div className="dayView__header">
                <div className="dayView__header-empty"></div>
                <div className="dayView__header-wrapper">
                    <div className="dayView__header-day">
                        <div className={`day`}>{date.getDate()}</div>
                        <div className='weekday'>{dayNumToReadable[date.getDay()]}</div>
                    </div>
                    <div className="dayView__header-event">
                        {
                            filteredEvents.filter(event => {
                                const eventDate = new Date(event.eventDate);
                                return event.allDay && eventDate.getDate() === date.getDate() &&
                                    eventDate.getMonth() === date.getMonth() &&
                                    eventDate.getFullYear() === date.getFullYear();
                            }).map((event, eventIndex) => (
                                event.allDay && (
                                    <div className="weekday-event" key={eventIndex}>
                                        <Event
                                            eventIndex={events.indexOf(event)}
                                            allDay={true}
                                            event={event}
                                            isHovered={hoveredEvent === event}
                                            onClick={(e) => handleClick(e, date, null, event)}
                                            onMouseEnter={() => setHoveredEvent(event)}
                                            onMouseLeave={() => setHoveredEvent(null)}
                                            setEditingEvent={setEditingEvent}
                                            duplicateCount={duplicateEvents[`${new Date(event.eventDate).toISOString().split('T')[0]}-${event.startTime}-${event.endTime}`]?.count}
                                        />
                                    </div>
                                )
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className="dayView__wrapper">
                <div className="dayView__timestamps">
                    {
                        generateTimestamps().map((item, index) => (
                            <div className="timestamp" key={index}>{item}</div>
                        ))
                    }
                </div>

                <div className="dayView__content">
                    {
                        Array.from({length: 24}). map((_, hourIndex) => (
                            <div 
                                className={`day__hour ${date.getDate()}.${date.getMonth()}-${hourIndex}`} key={hourIndex}
                                onClick={(e) => handleClick(e, date, hourIndex)}
                            >
                                {
                                    filteredEvents.filter(event => {
                                        const eventDate = new Date(event.eventDate);
                                        return !event.allDay && eventDate.getDate() === date.getDate() &&
                                            eventDate.getMonth() === date.getMonth() &&
                                            eventDate.getFullYear() === date.getFullYear();
                                    }).map((event, eventIndex) => (
                                        parseInt(event.startTime.split(':')[0], 10) === hourIndex && (
                                            <Event
                                                eventIndex={events.indexOf(event)}
                                                allDay={false}
                                                key={eventIndex}
                                                event={event}
                                                setEditingEvent={setEditingEvent}
                                                isHovered={hoveredEvent === event}
                                                onMouseEnter={() => setHoveredEvent(event)}
                                                onMouseLeave={() => setHoveredEvent(null)}
                                                onClick={(e) => handleClick(e, date, hourIndex, event)}
                                                duplicateCount={duplicateEvents[`${new Date(event.eventDate).toISOString().split('T')[0]}-${event.startTime}-${event.endTime}`]?.count}
                                            />
                                        )
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
            {
                isVisible && (
                    <CreateEventModal 
                        modalPosition={modalPosition}
                        setIsVisible={setIsVisible}
                        selectedTime={selectedTime}
                        selectedDate={selectedDate}
                        editing={editingEvent !== null}
                        event={editingEvent}
                    />
                )
            }
        </div>
    );
}

export default DayView;
