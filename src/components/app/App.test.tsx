import React from 'react';
import { render, screen,fireEvent } from '@testing-library/react';
import App from './App';

test('renders landing page', () => {
  render(<App />);
  const chartElement = screen.getByText(/landing page/i);
  expect(chartElement).toBeInTheDocument();
  // eslint-disable-next-line testing-library/no-debugging-utils
  screen.debug()
});

test('render after RND button', () => { 
    render(<App />);
    const btn = screen.getByTestId('btn-rnd');
    fireEvent.click(btn)
    expect(screen.getByTestId('charts-list')).toBeInTheDocument();
})