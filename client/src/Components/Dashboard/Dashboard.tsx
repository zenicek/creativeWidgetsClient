import React from 'react';
import './Dashboard.css';
import { SideMenu } from './SideMenu/side.menu';
import { WidgetList } from './WidgetList/Widget.list';

export const Dashboard: React.FC = () => {
  return (
    <div className='dashboard-ctn'>
      <div id='side-menu-ctn'>
        <SideMenu />
      </div>
      <div id='widgets-ctn'>
        <WidgetList />
      </div>
    </div>
  );
}
