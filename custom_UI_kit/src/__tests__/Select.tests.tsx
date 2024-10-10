import React from "react";
import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import Select from '../components/select/select';

describe('Select component', () => {
    it('render component with correct label', () => {
        render(<Select options={['Option 1', 'Option 2', 'Option 3']}  defaultValue = 'Test Value' label = 'Test label' /> )
        expect(screen.getByText('Test label')).toBeInTheDocument()
    })
    
    it('renders with default label and options', () => {
        render(<Select options={['Option 1', 'Option 2', 'Option 3']}  defaultValue = 'Test Value'/>);
        
        expect(screen.getByText('Test Value')).toBeInTheDocument();
        expect(screen.getByText('Option 1')).toBeInTheDocument();
        expect(screen.getByText('Option 2')).toBeInTheDocument();
        expect(screen.getByText('Option 3')).toBeInTheDocument();
    });

    it('toggles options visibility when clicked', () => {
        render(<Select options={['Option 1', 'Option 2','Option 3']} defaultValue="Test value" />);
        const select = screen.getByText('Test value');
        expect(select.classList.contains('select-options'))
        expect(screen.getByText('Test value')).toBeInTheDocument();
        fireEvent.click(select);
        expect(select.classList.contains('select-options visible'))  
    });

    it('changes value when an option is selected', () => {
        render(<Select defaultValue="Test value" options={['Option 1', 'Option 2', 'Option 3'] }/>);
        const select = screen.getByText('Test value');
        fireEvent.click(select);
    
        const option1 = screen.getByText('Option 1');
        fireEvent.click(option1);
    
        expect(screen.getByTestId('select')).toHaveTextContent('Option 1');
        expect(screen.queryByText('Test value')).not.toBeInTheDocument();
    });
});