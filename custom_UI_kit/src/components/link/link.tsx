import React from 'react';
import './link.css'

interface LinkProps {
    href: string,
    children: React.ReactNode,
    disabled?: boolean
}
const Link: React.FC<LinkProps> = ({ children, href, disabled = false }) => {
    return (
      <a
        className={`link link-primary ${disabled ? 'disabled' : ''}`}
        href={disabled ? '#' : href}
        onClick={(e) => {
          if (disabled) e.preventDefault();
        }}
      >
        {children}
      </a>
    );
  }

export default Link;