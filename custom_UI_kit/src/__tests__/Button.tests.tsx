import React from "react";
import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from "../components/button/button";

describe('Button component', () => {
  it('renders with the correct text', () => {
    render(<Button onClick={() => {}}>Click Me</Button>);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    fireEvent.click(screen.getByText('Click Me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders with the correct class based on type', () => {
    const { container } = render(<Button type="secondary" onClick={() => {}}>Click Me</Button>);
    expect(container.firstChild).toHaveClass('btn-secondary');
  });

  it('is disabled when the disabled prop is true', () => {
    const { container } = render(<Button onClick={() => {}} disabled>Click Me</Button>);
    expect(container.firstChild).toBeDisabled();
  });

  it('is not disabled when the disabled prop is false', () => {
    const { container } = render(<Button onClick={() => {}} disabled={false}>Click Me</Button>);
    expect(container.firstChild).not.toBeDisabled();
  });

  it('applies the disabled class when the disabled prop is true', () => {
    const { container } = render(<Button onClick={() => {}} disabled>Click Me</Button>);
    expect(container.firstChild).toHaveClass('disabled');
  });

  it('does not apply the disabled class when the disabled prop is false', () => {
    const { container } = render(<Button onClick={() => {}} disabled={false}>Click Me</Button>);
    expect(container.firstChild).not.toHaveClass('disabled');
  });
});