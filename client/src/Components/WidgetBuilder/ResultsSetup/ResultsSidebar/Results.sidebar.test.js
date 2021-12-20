import React from 'react';
import { ResultsSiderbar } from './Results.sidebar';
import { render, screen } from '@testing-library/react';

describe('results sidebar', () => {
  test('renders correct error on invalid formula input', async () => {
    const setWidgetMock = jest.fn();
    const useStateMock = useState => [useState, setWidgetMock];
    jest.spyOn(React, 'useState').mockImplementation(useStateMock);

    const { container } = render(<ResultsSiderbar />);

    const formulaInput = container.querySelector('#formula-input');
    expect(formulaInput).toBeInTheDocument();

    expect(screen.getByText(/elements/i).textContent).toBe(
      'Elements with letter "B" don\'t exist'
    );
  });
});
