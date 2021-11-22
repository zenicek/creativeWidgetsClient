import './Elements.list.css';
import elems from './Icons/Icons';
import { ListItem } from './ListItem/List.item';

export function ElementsList() {
  const list = elems.map((el, index) => {
    return (
      <li key={index} className="icon-ctn" title="listItem">
        <ListItem icon={el.icon} text={el.text} elementName={el.elementName} />
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
