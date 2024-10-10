import React from "react";
import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import Modal from "../components/modal/modal";

describe('Modal component', () => {
    it('renders with correct title and description', () => {
      render(<Modal title="Test Title" descr="Test Description" />);
      expect(screen.getByText('Test Title')).toBeInTheDocument();
      expect(screen.getByText('Test Description')).toBeInTheDocument();
    });
  
    it('renders default title when not provided', () => {
      render(<Modal descr="Test Description" />);
      expect(screen.getByText('Title')).toBeInTheDocument();
    });
  
    it('calls onClick handler when close button is clicked', () => {
      const onClick = jest.fn();
      render(<Modal title="Test Title" descr="Test Description" onClick={onClick} />);
      fireEvent.click(screen.getByTestId('modal-close-button'));
      expect(onClick).toHaveBeenCalled();
    });
});