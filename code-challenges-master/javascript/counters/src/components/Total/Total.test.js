import React from 'react';
import Total from './Total';
import { render } from "@testing-library/react";
describe('Given a Total component', () => {
  test('Should render a + symbol', () => {
    const { container } = render(<Total />);
    const chooseTag = container.querySelector('h1');
    expect(chooseTag.textContent).toBe('Total Value:');
  });
});