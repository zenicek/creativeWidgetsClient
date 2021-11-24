import { render, screen } from '@testing-library/react';
import { Dashboard } from './Dashboard';
import { BrowserRouter } from 'react-router-dom';

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