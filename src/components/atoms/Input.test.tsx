import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from './Input';

describe('Input component', () => {
  it('renders input with label', () => {
    render(<Input label="Customer name" />);
    expect(screen.getByLabelText(/customer name/i)).toBeInTheDocument();
  });

  it('renders placeholder text', () => {
    render(<Input placeholder="Enter value" />);
    expect(screen.getByPlaceholderText(/enter value/i)).toBeInTheDocument();
  });

  it('handles text input', async () => {
    const user = userEvent.setup();
    render(<Input label="Test" />);
    const input = screen.getByLabelText(/test/i);

    await user.type(input, 'test value');
    expect(input).toHaveValue('test value');
  });

  it('displays error message when error prop is provided', () => {
    render(<Input label="Amount" error="Amount must be greater than zero" />);
    expect(screen.getByText(/amount must be greater than zero/i)).toBeInTheDocument();
  });

  it('renders currency prefix', () => {
    render(<Input label="Price" prefix="$" />);
    expect(screen.getByText('$')).toBeInTheDocument();
  });

  it('disables input when disabled prop is true', () => {
    render(<Input label="Disabled" disabled />);
    expect(screen.getByLabelText(/disabled/i)).toBeDisabled();
  });

  it('supports different input types', () => {
    render(<Input type="number" label="Quantity" />);
    const input = screen.getByLabelText(/quantity/i) as HTMLInputElement;
    expect(input.type).toBe('number');
  });
});
