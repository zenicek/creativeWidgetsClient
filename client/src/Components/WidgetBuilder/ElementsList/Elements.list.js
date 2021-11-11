import './Elements.list.css';
import icons from './Icons/Icons';

export function ElementsList() {
  const list = icons.map((icon, index) => {
    return (
      <li key={index} className="icon-ctn">
        <div>
          <img src={icon.icon} alt={icon.text} className="icon-img" />
          <span className="option-text">{icon.text}</span>
        </div>
      </li>
    );
  });

  return (
    <ul>
      <h4>Select element and drag</h4>
      {list}
    </ul>
  );
}
