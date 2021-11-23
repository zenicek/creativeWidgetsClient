import { render } from '@testing-library/react';
import { WidgetList } from './Widget.list';
import { BrowserRouter } from 'react-router-dom';

test('should render widget-list-ctn', () => {
    const { container } = render(<BrowserRouter><WidgetList /></BrowserRouter>);
    expect(container.firstChild.classList.contains('widget-list-ctn')).toBe(true);
})