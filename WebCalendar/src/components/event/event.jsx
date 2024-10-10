import  {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal } from 'ui-kit-vr/dist/uikit-vr.cjs';
import { convertRgbToRgba, calculateEventPosition, calculateEventModalPosition } from '../../utils/eventUtils';
import { fullDayNumToReadable } from '../../utils/calendarUtils';
import { deleteEvent } from '../../store/slices/eventSlice';
import './event.css'

const Event = ({ event, isHovered, onMouseEnter, onMouseLeave, onClick, allDay, setEditingEvent, eventIndex, duplicateCount }) => {
    const dispatch = useDispatch();
    const [isVisible, setIsVisible] = useState(false);
    const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
    const monthNumToReadable = useSelector(state => state.header.monthNumToReadable);
    const view = useSelector(state => state.header.view);

    const { top, height } = calculateEventPosition(event, allDay);
    const { eventName, eventDate, startTime, endTime, repeat, selectedCalendar, description } = event;

    const name = eventName.length > 18 ? eventName.slice(0, 12) + '...' : eventName;
    const displayedName = duplicateCount > 1 && !allDay ? name.slice(0, 6) + '...' : name;

    const handleClick = (e) => {
        setIsVisible(!isVisible);
        e.stopPropagation();
        calculateEventModalPosition(e, view, setModalPosition);
    };

    const handleOnClick = (e) => {
        e.stopPropagation();
        onClick(e, event);
        setEditingEvent(event);
        setIsVisible(false);
    };

    const onEventDelete = (eventIndex) => {
        dispatch(deleteEvent(eventIndex));
    };

    const rgbaColor = convertRgbToRgba(selectedCalendar.color, 0.3);
    const hoverColor = convertRgbToRgba(selectedCalendar.color, 0.7);
    const backgroundColor = isHovered ? hoverColor : rgbaColor;
    const borderLeftColor = selectedCalendar.color;

    const eventStyle = {
        top,
        height,
        backgroundColor,
        borderLeft: `4px solid ${borderLeftColor}`,
        width: duplicateCount > 1 && !allDay ? '50%' : '100%',
        right: duplicateCount > 1 && eventIndex % 2 === 1 ? 0 : 'auto',
    };

    return (
        <>
            <div
                className="calendar__event"
                style={eventStyle}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                onClick={handleClick}
            >
                {parseFloat(height) <= 50 && !allDay ? (
                    <>{`${displayedName} ${startTime}`}</>
                ) : (
                    <>
                        <div>{displayedName}</div>
                        <div>{`${startTime} - ${endTime}`}</div>
                    </>
                )}
            </div>

            {isVisible && (
                <Modal
                    position='absolute'
                    top={modalPosition.top}
                    left={modalPosition.left}
                    width='522px'
                    height='278px'
                    onClick={handleClick}
                    descr={
                        <>
                            <div onClick={(e) => e.stopPropagation()}>
                                <div className="btn__wrapper-edit">
                                    <button className='button__event-modal button__event-modal--edit' onClick={handleOnClick}></button>
                                    <button className='button__event-modal button__event-modal--delete' onClick={() => onEventDelete(eventIndex)}></button>
                                </div>
                                <div className="event-info__wrapper">
                                    <div className="event-info__icon event__info-icon--text"></div>
                                    {eventName}
                                </div>
                                <div className="event-info__wrapper event-info__wrapper--date">
                                    <div className="event-info__icon event__info-icon--time"></div>
                                    {fullDayNumToReadable[eventDate.getDay()]}, {monthNumToReadable[eventDate.getMonth()]} {eventDate.getDate()}, {startTime} - {endTime} {event.allDay ? 'All day,' : ','} {repeat}
                                </div>
                                <div className="event-info__wrapper">
                                    <div className="event-info__icon event__info-icon--calendar"></div>
                                    <div className="event-info__calendar-color" style={{ backgroundColor: selectedCalendar.color }}></div>
                                    {selectedCalendar.name}
                                </div>
                                <div className="event-info__wrapper">
                                    <div className="event-info__icon event__info-icon--descr"></div>
                                    {description}
                                </div>
                            </div>
                        </>
                    }
                />
            )}
        </>
    );
};

export default Event;