import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders landing page', () => {
  const {container} = render(<App />);
  const chartElement = screen.getByText(/landing page/i);
  expect(chartElement).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});

test('render after RND button', () => { 
    const {container} = render(<App />);
    const btn = screen.getByTestId('btn-rnd');
    fireEvent.click(btn);
    expect(container.querySelectorAll('.wraperString').length).toBe(4);
});