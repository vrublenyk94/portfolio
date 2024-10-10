import React from "react";
import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import Dropdown from '../components/dropdown/dropdown';

describe('Dropdown component', () => {
  it('renders with default option', () => {
    render(<Dropdown options={['Option 1', 'Option 2']} defaultOption="Select an option" />);
    expect(screen.getByText('Select an option')).toBeInTheDocument();
  });

  it('toggles options visibility when clicked', () => {
    render(<Dropdown options={['Option 1', 'Option 2']} defaultOption="Select an option" />);
    const dropdown = screen.getByText('Select an option');
    expect(dropdown.classList.contains('dropdown-options hidden'))
    fireEvent.click(dropdown);
    expect(dropdown.classList.contains('dropdown-options visible'))  
  });

  it('changes value when an option is selected', () => {
    render(<Dropdown options={['Option 1', 'Option 2']} defaultOption="Select an option" />);
    const dropdown = screen.getByText('Select an option');
    fireEvent.click(dropdown);

    const option1 = screen.getByText('Option 1');
    fireEvent.click(option1);

    expect(screen.getByTestId('dropdown')).toHaveTextContent('Option 1');
    expect(screen.queryByText('Select an option')).not.toBeInTheDocument();
  });
});