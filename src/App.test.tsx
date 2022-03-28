import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import App from './App';

afterEach(cleanup)
test('renders learn react link', () => {
  render(<App />);
  const welcomeMessage = screen.getByText(/Welcome to Invoice/i);
  expect(welcomeMessage).toBeInTheDocument();
});
