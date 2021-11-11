import './Elements.list.css';
import icons from './Icons/Icons';

export function ElementsList() {
  return (
    <ul>
      <li>
        <img src={icons[0].icon} />{' '}
      </li>
    </ul>
  );
}
