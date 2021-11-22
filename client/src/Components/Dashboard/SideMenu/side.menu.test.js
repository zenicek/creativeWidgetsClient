import { render } from '@testing-library/react';
import { SideMenu } from './side.menu';

test('should render SideMenu', () => {
    const sideMenu = render(<SideMenu />);
    expect(sideMenu);
})