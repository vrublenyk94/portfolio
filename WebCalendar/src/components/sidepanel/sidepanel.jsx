import CalendarCreator from '../calendarCreator/calendarCreator';
import CreateEventModal from '../createEventModal/createEventModal';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Datepicker,  } from 'ui-kit-vr/dist/uikit-vr.cjs';
import { setSelectedDate } from '../../store/slices/headerSlice';

import './sidepanel.css'

const Sidepanel = () => {
    const [isVisible, setIsVisible] = useState(false);
    const dispatch = useDispatch();
    const currentDate = useSelector(state => state.header.selectedDate)

    const handleDateSelect = (date) => {
        dispatch(setSelectedDate(date))
    }

    const modalPosition = {
        top: '100px',
        left: '20%'
    }

    return (
        <div className='sidepanel'>
            <Button type='primary primary--plus' children='Create' onClick={() => setIsVisible(!isVisible)}/>
            <Datepicker  date={currentDate} onDateSelected={handleDateSelect}/>
            <CalendarCreator />
            {
                isVisible && (
                    <CreateEventModal modalPosition={modalPosition} setIsVisible={setIsVisible} selectedTime='1' selectedDate={currentDate} editing={false}/>
                ) 
            }
        </div>
    );
}

export default Sidepanel;