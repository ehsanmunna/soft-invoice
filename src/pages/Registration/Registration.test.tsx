import { render, screen } from '@testing-library/react';
import Registration from './Registration';

test('render restration header', () => {
    render(<Registration />);
    const linkElement = screen.getByText(/Be a member/i);
    expect(linkElement).toBeInTheDocument();
    const loginText = screen.getByText(/already registared?/i);
    expect(loginText).toBeInTheDocument();
  });