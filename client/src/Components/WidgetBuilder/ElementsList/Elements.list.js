import './Elements.list.css';
import icons from './Icons/Icons';
import { ListItem } from './ListItem/List.item';

export function ElementsList() {
  const list = icons.map((icon, index) => {
    return (
      <li key={index} className="icon-ctn">
        <ListItem
          icon={icon.icon}
          text={icon.text}
          element={icon.elementName}
          renderEl={icon.element}
        />
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
