import React from 'react';
import './checkbox.css';

interface CheckboxProps {
  label?: React.ReactNode;
}

const Checkbox: React.FC<CheckboxProps> = ({ label }) => {
  return (
    <label className="checkbox-label">
      <span className='checkbox-descr'>{label !== '' ? label : null}</span>
      <input type="checkbox" className='checkbox' />
    </label>
  );
};

export default Checkbox;