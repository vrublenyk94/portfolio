import React, { useState } from 'react';
import './datepicker.css';

interface DatepickerProps {
    date: React.ReactNode
}

const Datepicker: React.FC<DatepickerProps>= ({date}) => {
    const [selectedDate, setSelectedDate] = useState(date);

    const dayNumToReadable = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    const monthNumToReadable = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
    const getFirstDayOfMonth = (month, year) => new Date(year, month, 1).getDay();

    const today = new Date();
    const todayDate = today.getDate();
    const todayMonth = today.getMonth();
    const todayYear = today.getFullYear();

    const generateCalendar = (month, year) => {
        const numDays = daysInMonth(month, year);
        const firstDay = getFirstDayOfMonth(month, year);
        const calendar = [];

        let day = 1;
        const prevMonthDays = daysInMonth(month - 1, year);
        const prevMonth = (month - 1 + 12) % 12;
        const prevYear = month === 0 ? year - 1 : year;
        const nextMonth = (month + 1) % 12;
        const nextYear = month === 11 ? year + 1 : year;

        for (let i = 0; i < 6; i++) {
            const week = new Array(7).fill(null);

            for (let j = 0; j < 7; j++) {
                if (i === 0 && j < firstDay) {
                    week[j] = {
                        day: prevMonthDays - (firstDay - 1) + j,
                        month: prevMonth,
                        year: prevYear,
                        currentMonth: false,
                    };
                } else if (day > numDays) {
                    week[j] = {
                        day: day - numDays,
                        month: nextMonth,
                        year: nextYear,
                        currentMonth: false,
                    };
                    day++;
                } else {
                    week[j] = {
                        day: day,
                        month: month,
                        year: year,
                        currentMonth: true,
                    };
                    day++;
                }
            }
            calendar.push(week);
        }

        return calendar;
    };

    const calendar = generateCalendar(selectedDate.getMonth(), selectedDate.getFullYear());

    const handlePrevMonth = () => {
        const prevMonth = (selectedDate.getMonth() - 1 + 12) % 12;
        const year = prevMonth === 11 ? selectedDate.getFullYear() - 1 : selectedDate.getFullYear();
        setSelectedDate(new Date(year, prevMonth, 1));
    };

    const handleNextMonth = () => {
        const nextMonth = (selectedDate.getMonth() + 1) % 12;
        const year = nextMonth === 0 ? selectedDate.getFullYear() + 1 : selectedDate.getFullYear();
        setSelectedDate(new Date(year, nextMonth, 1));
    };

    return (
        <div className="datepicker">
            <div className="datepicker__wrapper">
                <h3 className="datepicker__current-month">
                    {monthNumToReadable[selectedDate.getMonth()]} {selectedDate.getFullYear()}
                </h3>
                <div className="datepicker__buttons">
                    <button className="datepicker__btn datepicker__btn--prev" onClick={handlePrevMonth} data-testid="datepicker-prev"></button>
                    <button className="datepicker__btn datepicker__btn--next" onClick={handleNextMonth} data-testid="datepicker-next"></button>
                </div>
            </div>
            <div className="datepicker__calendar">
                <div className="datepicker__weekdays">
                    {dayNumToReadable.map((day, index) => (
                        <div key={index} className="datepicker__weekday" role='heading' data-testid={`weekday-${index}`}>{day}</div>
                    ))}
                </div>
                {calendar.map((week, weekIndex) => (
                    <div key={weekIndex} className="datepicker__week">
                        {week.map((dayInfo, dayIndex) => (
                            <div
                                key={dayIndex}
                                className={`datepicker__day ${dayInfo.currentMonth ? 'current' : 'other'} ${dayInfo.day === todayDate && dayInfo.month === todayMonth && dayInfo.year === todayYear ? 'selected' : ''}`}
                                role={'day'}
                            >
                                {dayInfo.day}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Datepicker;