export const convertTimeTo24HourFormat = (timeString) => {
    const [time, modifier] = timeString.split(' ');
    let [hours, minutes] = time.split(':').map(Number);

    if (modifier.toLowerCase() === 'pm' && hours !== 12) {
        hours += 12;
    } else if (modifier.toLowerCase() === 'am' && hours === 12) {
        hours = 0;
    }

    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');

    return `${hours}${minutes}`;
};

export const calculateEventPosition = (event, allDay) => {
    if (!allDay) {
        const startTime = convertTimeTo24HourFormat(event.startTime);
        const endTime = convertTimeTo24HourFormat(event.endTime);
    
        const topMinutesMap = {
            '00': '0%',
            '15': '25%',
            '30': '50%',
            '45': '75%',
        };
    
        const getMinutesFromTime = (time) => parseInt(time.slice(-2));
        const getHoursFromTime = (time) => parseInt(time.slice(0, 2));
    
        const startMinutes = getMinutesFromTime(startTime);
        const endMinutes = getMinutesFromTime(endTime);
    
        const startHours = getHoursFromTime(startTime);
        const endHours = getHoursFromTime(endTime);
    
        const startTotalMinutes = startHours * 60 + startMinutes;
        const endTotalMinutes = endHours * 60 + endMinutes;
    
        const top = topMinutesMap[startMinutes.toString().padStart(2, '0')];
        const totalMinutes = endTotalMinutes - startTotalMinutes;
        const heightPercentage = (totalMinutes / 60) * 100;
    
        const height = `${heightPercentage}%`;
    
        return { top, height };
    } else {
        const top = '0';
        const height = '100%'
        return { top, height };
    }

};

export const convertRgbToRgba = (rgb, alpha) => {
    const rgbValues = rgb.match(/\d+/g);
    return `rgba(${rgbValues[0]}, ${rgbValues[1]}, ${rgbValues[2]}, ${alpha})`;
};

export const calculateEventModalPosition = (e, view, setModalPosition) => {

    if(view === 'Day') {
        setModalPosition({ top: '22%', left: '30%' })
    } else {
        const rect = e.target.getBoundingClientRect();
        const modalHeight = 278;
        const modalWidth = 522;
        
        if (rect.x < 800) {
            if (rect.y > 425) {
                setModalPosition({ top: -modalHeight + 100, left: '100%' });
            } else {
                setModalPosition({ top: 0, left: '100%' });
            }
        } else if(rect.x > 900) {
            if (rect.y > 425) {
                setModalPosition({ top: -modalHeight + 100, left: -modalWidth });
            } else {
                setModalPosition({ top: 0, left: -modalWidth });
            }
        }
    }

};