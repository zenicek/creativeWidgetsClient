import App from "./App"
import { render, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from "react-router-dom";

describe('App tests', () => {
    test('should render App component', () => {
        render(<BrowserRouter><App /></BrowserRouter>);
        screen.debug();
    })

    test('should render App div', () => {
        const { container } = render(<BrowserRouter><App /></BrowserRouter>);
        expect(container.firstChild.classList.contains('App')).toBe(true);
    })

    test('app should render dashboard component', () => {
        render(<App />, { wrapper: MemoryRouter });
        expect(screen.getByRole('dash-side-menu')).toBeInTheDocument();
    })

})