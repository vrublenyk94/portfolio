import React from "react";
import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import Datepicker from "../components/datepicker/datepicker";

describe('Datepicker component', () => {
    it('renders with the correct current month and year', () => {
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth();
        const currentYear = currentDate.getFullYear();
        const monthNumToReadable = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        
        render(<Datepicker date={currentDate} />);
        
        expect(screen.getByText(`${monthNumToReadable[currentMonth]} ${currentYear}`)).toBeInTheDocument();
    });

    it('shows the correct number of weekdays', () => {
        render(<Datepicker date={new Date()} />);
        
        const weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
        weekdays.forEach((day) => {
            const elements = screen.getAllByRole('heading', { name: day });
            expect(elements.length).toBeGreaterThan(0);
            elements.forEach(element => {
                expect(element).toBeInTheDocument();
            });
        });
    });

    it('renders the calendar with the correct number of days for the current month', () => {
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth();
        const currentYear = currentDate.getFullYear();
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

        render(<Datepicker date={currentDate} />);
        
        const days = screen.getAllByRole('day').filter(day => day.classList.contains('current'));
        expect(days).toHaveLength(daysInMonth);
    });

    it('updates the month when clicking the next button', () => {
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth();
        const currentYear = currentDate.getFullYear();
        const nextMonth = (currentMonth + 1) % 12;
        const monthNumToReadable = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


        render(<Datepicker date={currentDate} />);
        
        fireEvent.click(screen.getByTestId('datepicker-next'));
        expect(screen.getByText(`${monthNumToReadable[nextMonth]} ${currentYear}`)).toBeInTheDocument();
    });

    it('updates the month when clicking the previous button', () => {
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth();
        const currentYear = currentDate.getFullYear();
        const prevMonth = (currentMonth - 1 + 12) % 12;
        const monthNumToReadable = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


        render(<Datepicker date={currentDate} />);
        
        fireEvent.click(screen.getByTestId('datepicker-prev'));
        expect(screen.getByText(`${monthNumToReadable[prevMonth]} ${currentYear}`)).toBeInTheDocument();
    });
});