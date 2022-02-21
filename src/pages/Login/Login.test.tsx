import { render, screen } from '@testing-library/react';
import LoginPage from './Login';

test('render login header', () => {
    render(<LoginPage />);
    const linkElement = screen.getByText(/Login to your account/i);
    expect(linkElement).toBeInTheDocument();
  });