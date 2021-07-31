import React from 'react';
import App from './App';
import { render } from "@testing-library/react";
describe('Given a App component', () => {
  test('Should render a + symbol', () => {
    const { container } = render(<App />);
    const chooseTag = container.querySelector('h1');
    expect(chooseTag.textContent).toBe('Counters exercise');
  });
});