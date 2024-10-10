import {useSelector} from 'react-redux'
import WeekView from '../weekView/weekWiev';
import DayView from '../dayView/dayView';
import { getWeekFromDate, dayNumToReadable } from '../../utils/calendarUtils';
import './calendar.css'

const Calendar = () => {
    const date  = useSelector(state => state.header.selectedDate);
    const view = useSelector(state=> state.header.view);

    const today = new Date();
    const todayDate = today.getDate();
    const todayMonth = today.getMonth();
    const todayYear = today.getFullYear();

    const currentWeek = getWeekFromDate(date)
    const day = view === 'Day'&& <DayView date={date} />;
    const week = view === 'Week'&& <WeekView week={currentWeek} today = {todayDate} month = {todayMonth} year ={todayYear} days = {dayNumToReadable}/>;
    return (
        <div className='calendar'>
            {
                day|| week
            }
        </div>
    );
}

export default Calendar;