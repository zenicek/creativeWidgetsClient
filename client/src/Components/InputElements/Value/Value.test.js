import React from 'react';
import { ValueInput } from './Value';
import { InitialContext } from '../../../Utils/InitialContext';
import { IndividualWidget } from '../../../Utils/Contexts';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { apiWidget } from '../../../../Mocks';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

test('value input component is being rendered and changed on input', async () => {
  const setWidgetMock = jest.fn();
  const useStateMock = (useState) => [useState, setWidgetMock];
  jest.spyOn(React, 'useState').mockImplementation(useStateMock);

  const context = InitialContext(apiWidget, setWidgetMock);

  const { container } = render(
    <DndProvider backend={HTML5Backend}>
      <IndividualWidget.Provider value={context}>
        <ValueInput />
      </IndividualWidget.Provider>
    </DndProvider>
  );

  const inputEl = screen.getAllByPlaceholderText('Number')[0];
  expect(inputEl).toBeInTheDocument();

  await userEvent.type(inputEl, '543');
  expect(inputEl.value).toBe('543');
});
