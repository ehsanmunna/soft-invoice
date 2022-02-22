import { render, screen } from '@testing-library/react';
import NotFound from './NotFound';

test('render login header', () => {
    render(<NotFound />);
    const linkElement = screen.getByText(/404 Not found/i);
    expect(linkElement).toBeInTheDocument();
  });