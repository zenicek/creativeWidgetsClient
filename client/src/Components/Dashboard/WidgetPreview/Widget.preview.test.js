import { WidgetPreview } from "./Widget.preview";
import { render } from '@testing-library/react';

test('WidgetPreview renders widget-pv-ctn', () => {
    const { container } = render(<WidgetPreview />);
    expect(container.firstChild.classList.contains('widget-pv-ctn')).toBe(true);
})
