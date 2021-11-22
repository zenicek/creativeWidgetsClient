import './side.menu.css';
import { ReactComponent as DashIcon } from '../Icons/dashboard-icon.svg';
import { ReactComponent as SettIcon } from '../Icons/settings-icon.svg';
import { ReactComponent as PayIcon } from '../Icons/payment-icon.svg';

export const SideMenu: React.FC = () => {
  return (
    <div className='side-menu-wrapper-ctn'>
      <h1>Creative Widgets</h1>
      <a id='new-widget-btn' href='/new-widget' role="new-widget-btn">
        +
      </a>
      <ul>
        <li className='menu-item-ctn'>
          <a className='menu-link' href='/' role="dash-link">
            <div><DashIcon /></div>
            <span>Dashboard</span>
          </a>
        </li>
        <li className='menu-item-ctn'>
          <a className='menu-link' href='/' role="settings-link">
            <div><SettIcon /></div>
            Settings
          </a>
        </li>
        <li className='menu-item-ctn'>
          <a className='menu-link' href='/' role="payment-link">
            <div><PayIcon /></div>
            Payment
          </a>
        </li>
      </ul>
    </div>
  );
}
