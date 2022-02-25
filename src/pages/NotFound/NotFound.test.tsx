import { render, screen } from '@testing-library/react';
import NotFound from './NotFound';

describe('Test Not found page', () => {
  test('should render not found message', () => {
    render(<NotFound />);
    const linkElement = screen.getByText(/404 Not found/i);
    expect(linkElement).toBeInTheDocument();
  });
});
