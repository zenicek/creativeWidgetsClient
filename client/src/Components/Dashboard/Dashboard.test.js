import { render, screen } from '@testing-library/react';
import { Dashboard } from './Dashboard';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';

describe('Dashboard tests', () => {
    test('should render Dashboard', () => {
        render(<BrowserRouter><Dashboard /></BrowserRouter>);
        screen.debug();
    })

    test('should render dashboard-ctn', () => {
        const { container } = render(<BrowserRouter><Dashboard /></BrowserRouter>);
        expect(container.firstChild.classList.contains('dashboard-ctn')).toBe(true);
    })

    test('should render dash-side-menu', () => {
        render(<BrowserRouter><Dashboard /></BrowserRouter>);
        const dashSideMenu = screen.getByRole('dash-side-menu');
        expect(dashSideMenu).toBeEnabled(true);
    })

    test('should render dash-widgets-ctn', () => {
        render(<BrowserRouter><Dashboard /></BrowserRouter>);
        const dashSideMenu = screen.getByRole('dash-widgets-ctn');
        expect(dashSideMenu).toBeEnabled(true);
    })

    test('app should render sideMenu component', () => {
        render(<Dashboard />, { wrapper: MemoryRouter });
        expect(screen.getByRole('payment-link')).toBeInTheDocument();
    })

    test('app should render widgetList component', () => {
        render(<Dashboard />, { wrapper: MemoryRouter });
        expect(screen.getByRole('widget-preview-link')).toBeInTheDocument();
    })
})