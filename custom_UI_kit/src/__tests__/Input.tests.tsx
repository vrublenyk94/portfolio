import React from "react";
import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import Input from '../components/input/input';

describe('Input component', () => {
    it('renders with default type and label', () => {
        render(<Input label="Name" />);
        expect(screen.getByText('Name')).toBeInTheDocument();
        expect(screen.getByRole('input')).toBeInTheDocument();
    });

    it('renders with placeholder', () => {
        render(<Input placeholder="Enter your name" />);
        expect(screen.getByPlaceholderText('Enter your name')).toBeInTheDocument();
    });

    it('can be disabled', () => {
        render(<Input disabled={true} />);
        expect(screen.getByRole('input')).toBeDisabled();
    });

    it('shows error message', () => {
        render(<Input errorMessage="This field is required" />);
        expect(screen.getByText('This field is required')).toBeInTheDocument();
    });

    it('renders a textarea when type is textarea', () => {
        render(<Input type="textarea" cols="30" rows="10" />);
        expect(screen.getByRole('input')).toHaveAttribute('cols', '30');
        expect(screen.getByRole('input')).toHaveAttribute('rows', '10');
    });

    it('renders a password icon when type is password', () => {
        render(<Input type="password" />);
        expect(screen.getByRole('input')).toHaveAttribute('type', 'password');
        expect(screen.getByRole('passIcon')).toBeInTheDocument();
    });
});