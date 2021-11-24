import { WidgetPreview } from "./Widget.preview";
import { render, screen } from '@testing-library/react';

describe('WidgetPreview tests', () => {
    test('should render WidgetPreview', () => {
        render(<WidgetPreview/>);
        screen.debug();
    })

    test('should render widget-pv-ctn', () => {
        const { container } = render(<WidgetPreview />);
        expect(container.firstChild.classList.contains('widget-pv-ctn')).toBe(true);
    })

    test('should render widget-or-calc', () => {
        render(<WidgetPreview />)
        const widgetOrCalc = screen.getByRole('widget-or-calc');
        expect(widgetOrCalc).toBeEnabled(true);
    })

    test('should render widget-or-new', () => {
        render(<WidgetPreview />)
        const widgetOrNew = screen.getByRole('widget-or-new');
        expect(widgetOrNew).toBeEnabled(true);
    })
})