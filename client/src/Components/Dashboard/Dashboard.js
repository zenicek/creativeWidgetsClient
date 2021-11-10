import './Dashboard.css';
import { SideMenu } from './SideMenu/side.menu';
import { WidgetList } from './WidgetList/Widget.list';

export function Dashboard() {
  return (
    <div className="dashboard-ctn">
      <div id="side-menu-ctn">
        <SideMenu />
      </div>
      <div id="widget-list-ctn">
        <WidgetList />
      </div>
    </div>
  );
}
