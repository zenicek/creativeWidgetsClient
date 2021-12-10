import React from 'react';
import './Dashboard.css';
import { SideMenu } from './SideMenu/side.menu';
import { WidgetList } from './WidgetList/Widget.list';

export const Dashboard: React.FC = () => {
  return (
    <div className='dashboard-ctn'>
      <div id='side-menu-ctn' role="dash-side-menu">
        <SideMenu />
      </div>
      <div id='widgets-ctn' role="dash-widgets-ctn">
        <WidgetList />
      </div>
    </div>
  );
}
