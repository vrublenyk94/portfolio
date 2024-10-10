import React from "react";
import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import Toast from "../components/toast/toast";

describe('Toast Component', () => {
    it('render toast with correct title', () => {
        render(<Toast title = 'Test Title'/>)
        expect(screen.getByText('Test Title')).toBeInTheDocument();
    });

    it('calls onClick handler when close button is clicked', () => {
        const onClick = jest.fn();
        render(<Toast title="Test Title" onClick={onClick} />);
        fireEvent.click(screen.getByTestId('modal-close-button'));
        expect(onClick).toHaveBeenCalled();
      });
})