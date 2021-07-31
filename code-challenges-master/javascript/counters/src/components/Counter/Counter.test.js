import React from 'react';
import Counter from './Counter';
import { render } from "@testing-library/react";
describe('Given a Counter component', () => {
  test('Should render a + symbol', () => {
    const { container } = render(<Counter />);
    const chooseTag = container.querySelector('button');
    expect(chooseTag.textContent).toBe('-');
  });
});