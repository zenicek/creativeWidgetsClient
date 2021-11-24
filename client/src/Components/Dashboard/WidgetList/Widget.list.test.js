import { render, screen } from '@testing-library/react';
import { WidgetList } from './Widget.list';
import { BrowserRouter } from 'react-router-dom';

describe('WidgetLists tests', () => {
    test('should render WidgetList', () => {
        render(<BrowserRouter><WidgetList /></BrowserRouter>);
        screen.debug();
    })

    test('should render widget-list-ctn', () => {
        const { container } = render(<BrowserRouter><WidgetList /></BrowserRouter>);
        expect(container.firstChild.classList.contains('widget-list-ctn')).toBe(true);
    })

    test('should render widget-preview-link', () => {
        render(<BrowserRouter><WidgetList /></BrowserRouter>);
        const widgetPrevLink = screen.getByRole('widget-preview-link');
        expect(widgetPrevLink).toBeEnabled(true);
    })
})