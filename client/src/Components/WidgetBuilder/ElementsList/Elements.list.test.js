import { ElementsList } from './Elements.list';
import { render, screen } from '@testing-library/react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

test('elements list component is being rendered with children', () => {
  const { container } = render(
    <div>
      <DndProvider backend={HTML5Backend}>
        <ElementsList />
      </DndProvider>
    </div>
  );
  expect(container.hasChildNodes()).toBe(true);
  expect(screen.getByText('Select element and drag')).toBeInTheDocument();

  const list = screen.getByText('Select element and drag').closest('ul');
  const firstItem = screen.getAllByTitle('listItem')[0];
  expect(list).toContainElement(firstItem);
  expect(firstItem).toHaveClass('icon-ctn');
});
