import React from 'react';
import { ResultsSiderbar } from './Results.sidebar';
import { InitialContext } from '../../../../Utils/InitialContext';
import { IndividualWidget } from '../../../../Utils/Contexts';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { apiWidget, invalidFormulaWidget } from '../../../../../Mocks';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

describe('results sidebar', () => {
  test('renders correct error on invalid formula input', async () => {
    const setWidgetMock = jest.fn();
    const useStateMock = (useState) => [useState, setWidgetMock];
    jest.spyOn(React, 'useState').mockImplementation(useStateMock);

    const context = InitialContext(invalidFormulaWidget, setWidgetMock);

    const { container } = render(
      <IndividualWidget.Provider value={context}>
        <ResultsSiderbar />
      </IndividualWidget.Provider>
    );

    const formulaInput = container.querySelector('#formula-input');
    expect(formulaInput).toBeInTheDocument();

    expect(screen.getByText(/elements/i).textContent).toBe(
      'Elements with letter "B" don\'t exist'
    );
  });
});
