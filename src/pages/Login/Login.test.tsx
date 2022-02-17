import { render, screen } from '@testing-library/react';
import Login from './Login';

test('render login header', () => {
    render(<Login />);
    const linkElement = screen.getByText(/Login Page/i);
    expect(linkElement).toBeInTheDocument();
  });