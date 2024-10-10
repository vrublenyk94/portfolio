import React from 'react';
import './button.css';

type ButtonType = 'primary' | 'secondary' | 'primary primary-icon' | 'secondary secondary-icon';

interface ButtonProps {
  type?: ButtonType;
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ type = 'primary', onClick, children, disabled = false }) => {
  return (
    <button
      className={`btn btn-${type} ${disabled ? 'disabled' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;