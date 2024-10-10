import {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addCalendar, updateCalendar, deleteCalendar, setEventsVisible } from '../../store/slices/sidepanelSlice';
import CalendarCreatorModal from '../calendarCreatorModal/calendarCreatorModal';
import CalendarItem from '../calnedarItem/calendarItem';
import './calendarCreator.css'

const CalendarCreator = () => {
    const dispatch = useDispatch();
    const calendars = useSelector((state) => state.sidepanel.calendars);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [calendarName, setCalendarName] = useState('');
    const [calendarColor, setCalendarColor] = useState('');
    const [isVisible, setIsVisible] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [editIndex, setEditIndex] = useState(null);

    const handleModalOpen = () => {
        setIsModalVisible(!isModalVisible);
        setCalendarName('');
        setCalendarColor('');
        setEditIndex(null);
        setIsEditing(false);
    };
    const handleNameChange = (value) => {
        setCalendarName(value);
    };

    const handleColorSave = (color) => {
        setCalendarColor(color);
    };
    
    const handleCheckboxCheck = (index, checked) => {
        dispatch(setEventsVisible({ index, value: checked }));
    };

    const handleSetCalendarParams = () => {
        if (calendarName !== '' && calendarColor !== '') {
            const newCalendar = {
                name: calendarName,
                color: calendarColor,
                canBeDeleted: true,
                eventsVisible: true
            };
            if (isEditing && editIndex !== null) {
                dispatch(updateCalendar({ index: editIndex, calendar: newCalendar }));
            } else {
                dispatch(addCalendar(newCalendar));
            }
            setIsModalVisible(false);
            setCalendarName('');
            setCalendarColor('');
        }
    };

    const handleCalendarDelete = (index) => {
        dispatch(deleteCalendar(index));
    };

    const handleEditCalendar = (index) => {
        setIsEditing(true);
        setEditIndex(index);
        setCalendarName(calendars[index].name);
        setCalendarColor(calendars[index].color);
        setIsModalVisible(true);
    };

    return (
        <div className='calendarCreator'>
            <div className="calendarCreator__wrapper">
                <h3 className="calendarCreator__title"> My calendars</h3>
                <button className="calendarCreator__add" onClick={handleModalOpen}></button>
            </div>
            {isModalVisible && (
                <CalendarCreatorModal 
                    title={isEditing ? 'Edit Calendar' : 'Create Calendar'}
                    handleModalOpen={handleModalOpen}
                    handleNameChange={handleNameChange}
                    calendarName={calendarName}
                    handleColorSave={handleColorSave}
                    calendarColor={calendarColor}
                    handleSetCalendarParams={handleSetCalendarParams}
                />
            )}

            <ul className="calendarCreator__list">
                {calendars.map((item, index) => (
                        <CalendarItem
                            key={index}
                            item={item}
                            index={index}
                            onMouseEnter={setIsVisible}
                            onMouseLeave={setIsVisible}
                            visible={isVisible}
                            onDelete={handleCalendarDelete}
                            onEdit={handleEditCalendar}
                            isChecked={item.eventsVisible}
                            onCheck = {handleCheckboxCheck}
                        />
                    ))}
            </ul>
        </div>
    );
};

export default CalendarCreator;