import { render, screen } from '@testing-library/react';
import Registration from './Registration';

test('render restration header', () => {
    render(<Registration />);
    const linkElement = screen.getByText(/Registration Page/i);
    expect(linkElement).toBeInTheDocument();
  });