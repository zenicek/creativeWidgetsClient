import { render, screen } from '@testing-library/react';
import { SideMenu } from './side.menu';

test('should render SideMenu', () => {
    render(<SideMenu />);
    screen.debug()
})
