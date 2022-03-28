import { cleanup, render, screen } from '@testing-library/react';
import HomePage from './Home';

afterEach(cleanup)
test('render Home title', () => {
    render(<HomePage />);
    const linkElement = screen.getByText(/Welcome to Invoice/i);
    expect(linkElement).toBeInTheDocument();
  });