import { render, screen } from '@testing-library/react';
import { SideMenu } from './side.menu';

describe('SideMenu tests', () => {
    test('should render SideMenu', () => {
        render(<SideMenu />);
        screen.debug();
    })

    test('should render side-menu-wrapper-ctn', () => {
        const { container } = render(<SideMenu />);
        expect(container.firstChild.classList.contains('side-menu-wrapper-ctn')).toBe(true);
    })

    test('should render new-widget-btn', () => {
        render(<SideMenu />);
        const newWidgetBtn = screen.getByRole('new-widget-btn');
        expect(newWidgetBtn).toBeEnabled(true);
    })

    test('new-widget-btn has correct attribute', () => {
        render(<SideMenu />);
        expect(screen.getByText('+').closest('a')).toHaveAttribute('href', '/new-widget');
    })

    test('dash-link has correct attribute', () => {
        render(<SideMenu />);
        expect(screen.getByRole('dash-link').closest('a')).toHaveAttribute('href', '/');
    })

    test('settings-link has correct attribute', () => {
        render(<SideMenu />);
        expect(screen.getByRole('settings-link').closest('a')).toHaveAttribute('href', '/');
    })

    test('payment-link has correct attribute', () => {
        render(<SideMenu />);
        expect(screen.getByRole('payment-link').closest('a')).toHaveAttribute('href', '/');
    })
})