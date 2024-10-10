import React,{useState, useEffect} from 'react';
import CreateEventModal from '../createEventModal/createEventModal';
import Event from '../event/event';
import { useSelector, useDispatch } from 'react-redux';
import { resetForm } from '../../store/slices/eventSlice';
import { generateTimestamps } from '../../utils/calendarUtils';
import './weekView.css'

const WeekView = ({ week, today, month, year, days }) => {
    const dispatch = useDispatch();
    const events = useSelector(state => state.event.events || []);
    const calendars = useSelector(state => state.sidepanel.calendars)
    const [hoveredEvent, setHoveredEvent] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
    const [selectedTime, setSelectedTime] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [editingEvent, setEditingEvent] = useState(null);
    const [duplicateEvents, setDuplicateEvents] = useState({});


    const filteredEvents = events.filter(event => {
        const calendar = calendars.find(cal => cal.name === event.selectedCalendar.name);
        return calendar?.eventsVisible;
    });

    useEffect(() => {
        const duplicates = findDuplicateEvents(filteredEvents);
        setDuplicateEvents(duplicates);
    }, [events]);

    const handleClick = (e, date, hourIndex, eventObject = null) => {
        const rect = e.target.getBoundingClientRect();
        const modalWidth = 522;
        const modalHeight = 466;
        if (e.target.classList.contains('day-hour')) {
            if (rect.x < 900) {
                if (rect.y > 425) {
                    setModalPosition({ top: rect.top - (modalHeight + rect.height), left: rect.left - rect.width });
                } else {
                    setModalPosition({ top: rect.top - rect.height - 100, left: rect.left - rect.width });
                }
            } else {
                if (rect.y > 425) {
                    setModalPosition({ top: rect.top - (modalHeight + rect.height), left: rect.left - ((modalWidth + rect.width) * 1.3) });
                } else {
                    setModalPosition({ top: rect.top - rect.height - 100, left: rect.left - ((modalWidth + rect.width) * 1.3) });
                }
            }
            dispatch(resetForm())
        }
        setIsVisible(!e.target.classList.contains('calendar__event'));
        setEditingEvent(eventObject);
        setSelectedDate(date);
        setSelectedTime(hourIndex);
    };

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
        <div className='weekView'>
            <div className="weekView__header">
                <div className="weekday-header empty-header"></div>
                {days.map((day, index) => (
                    <div key={index} className={`weekday-header`}>
                        <div className="weekday-wrapper">
                            <div className={week[index].getDate() === today && week[index].getMonth() === month && week[index].getFullYear() === year ? 'header-today' : 'header-other'}>
                                <div className="day">{week[index].getDate()}</div>
                                <div className='weekday'>{day}</div>
                            </div>
                            {filteredEvents.filter(event => {
                                const eventDate = new Date(event.eventDate);
                                return event.allDay && eventDate.getDate() === week[index].getDate() &&
                                    eventDate.getMonth() === week[index].getMonth() &&
                                    eventDate.getFullYear() === week[index].getFullYear();
                            }).map((event, eventIndex) => (
                                event.allDay && (
                                    <div className="weekday-event" key={eventIndex}>
                                        <Event
                                            eventIndex={events.indexOf(event)}
                                            allDay={true}
                                            event={event}
                                            isHovered={hoveredEvent === event}
                                            onClick={(e) => handleClick(e, week[index], null, event)}
                                            onMouseEnter={() => setHoveredEvent(event)}
                                            onMouseLeave={() => setHoveredEvent(null)}
                                            setEditingEvent={setEditingEvent}
                                            duplicateCount={duplicateEvents[`${new Date(event.eventDate).toISOString().split('T')[0]}-${event.startTime}-${event.endTime}`]?.count}
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
                    {generateTimestamps().map((item, index) => (
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
                                    {filteredEvents.filter(event => {
                                        const eventDate = new Date(event.eventDate);
                                        return !event.allDay && eventDate.getDate() === dayInfo.getDate() &&
                                            eventDate.getMonth() === dayInfo.getMonth() &&
                                            eventDate.getFullYear() === dayInfo.getFullYear();
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
                                                onClick={(e) => handleClick(e, dayInfo, hourIndex, event)}
                                                duplicateCount={duplicateEvents[`${new Date(event.eventDate).toISOString().split('T')[0]}-${event.startTime}-${event.endTime}`]?.count}
                                            />
                                        )
                                    ))}
                                </div>
                            ))}
                        </React.Fragment>
                    ))}
                </div>
            </div>
            {isVisible && (
                <CreateEventModal
                    modalPosition={modalPosition}
                    setIsVisible={setIsVisible}
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