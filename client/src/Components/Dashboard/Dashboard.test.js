import { render } from '@testing-library/react';
import { Dashboard } from './Dashboard';
import { BrowserRouter } from 'react-router-dom';

test('should render dashboard-ctn', () => {
    const { container } = render(<BrowserRouter><Dashboard /></BrowserRouter>);
    expect(container.firstChild.classList.contains('dashboard-ctn')).toBe(true);
})