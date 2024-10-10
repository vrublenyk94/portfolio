import React from "react";
import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import Link from '../components/link/link';

describe('Link component', () => {
    it('renders with correct text', () => {
      render(<Link href="#">Link</Link>);
      expect(screen.getByText('Link')).toBeInTheDocument();
    });
  
    it('applies correct href when not disabled', () => {
      render(<Link href="https://example.com">Link</Link>);
      expect(screen.getByText('Link')).toHaveAttribute('href', 'https://example.com');
    });
  
    it('does not navigate when clicked if disabled', () => {
      render(<Link href="https://example.com" disabled>Link</Link>);
      const link = screen.getByText('Link');
      fireEvent.click(link);
      expect(link).toHaveAttribute('href', '#');
    });
  
    it('is disabled when disabled prop is true', () => {
      const { container } = render(<Link href="#" disabled>Link</Link>);
      expect(container.firstChild).toHaveClass('disabled');
    });
  
    it('is not disabled when disabled prop is false', () => {
      const { container } = render(<Link href="#" disabled={false}>Link</Link>);
      expect(container.firstChild).not.toHaveClass('disabled');
    });
  
    it('applies disabled class when disabled prop is true', () => {
      const { container } = render(<Link href="#" disabled>Link</Link>);
      expect(container.firstChild).toHaveClass('disabled');
    });
  
    it('does not apply disabled class when disabled prop is false', () => {
      const { container } = render(<Link href="#" disabled={false}>Link</Link>);
      expect(container.firstChild).not.toHaveClass('disabled');
    });
  });