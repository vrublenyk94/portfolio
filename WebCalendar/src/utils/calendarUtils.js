export const getWeekFromDate = (date) => {
    const startOfWeek = new Date(date);
    startOfWeek.setDate(date.getDate() - date.getDay());
  
    const week = [];
    for (let i = 0; i < 7; i++) {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);
      week.push(day);
    }
    return week;  
};

const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
const getFirstDayOfMonth = (month, year) => new Date(year, month, 1).getDay();

export const createCalendar = (month, year) => {
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

export const dayNumToReadable = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

export const generateTimestamps = () => {
    const timestamps = [];
    for( let i = 0; i < 24; i++) {
        if (i === 0) {
            timestamps.push(`${i}:00`)
        }else  if( i < 12) {
            timestamps.push(`${i} AM`)
        } else {
            timestamps.push(`${i} PM`)
        }
    }
    return timestamps
}

export const fullDayNumToReadable = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


