import React from "react";
import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import Checkbox from "../components/checkbox/checkbox";

describe('Checkbox component', () => {
    it('render with label if provided', () => {
        render(<Checkbox label = {'Accept terms and conditions'}/>)
        expect(screen.getByText('Accept terms and conditions')).toBeInTheDocument();
    })
    it('render checkbox without label', () => {
        render(<Checkbox/>)
        expect(screen.getByRole('checkbox')).toBeInTheDocument();
    })
})