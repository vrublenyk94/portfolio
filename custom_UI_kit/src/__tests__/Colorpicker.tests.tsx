import React from "react";
import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import Colorpicker from "../components/colorpicker/colorpicker";

describe('Colorpicer component', () => {
    it('render colorpicer with correct title',() => {
        const colors = ['rgb(159, 41, 87)', 'rgb(217, 0, 86)', 'rgb(226, 93, 51)'];
        render(<Colorpicker title = {'Test Title'} colors={colors}/>);
        expect(screen.getByText('Test Title')).toBeInTheDocument();
    })

    it('render correct numbers of colors', () => {
        const colors = ['rgb(159, 41, 87)', 'rgb(217, 0, 86)', 'rgb(226, 93, 51)'];
        render(<Colorpicker colors = {colors}/>)
        const colorElements = screen.getAllByRole('button');
        expect(colorElements.length).toBe(colors.length);
    })

    it('render colors with right backgrounds', () => {
        const colors = ['rgb(159, 41, 87)', 'rgb(217, 0, 86)', 'rgb(226, 93, 51)'];
        render(<Colorpicker colors={colors}/>)
        colors.forEach((color, index) => {
            const colorElements = screen.getAllByRole('button')[index];
            expect(colorElements).toHaveStyle(`background: ${color}`)
        })
    })
})