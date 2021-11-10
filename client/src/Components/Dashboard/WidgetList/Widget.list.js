import './Widget.list.css';
import { WidgetPreview } from '../WidgetPreview/Widget.preview';
import { Link } from 'react-router-dom';

export function WidgetList() {
  const widgets = widgetArray.map(widget => {
    return (
      <li key={widget._id}>
        <Link to={`/edit/${widget._id}`}>
          <WidgetPreview widget={widget} />
        </Link>
      </li>
    );
  });
  return (
    <ul className="widget-list-ctn">
      <li key="newWidget">
        <Link to="/new-widget">
          <WidgetPreview />
        </Link>
      </li>
      {widgets}
    </ul>
  );
}

// helper test array before connecting clinet to the server it will be removed after
const widgetArray = [
  { name: 'Mortgage calculator', _id: 0 },
  { name: 'insurance calc', _id: 1 },
  { name: 'car loan', _id: 2 },
  { name: 'electricity bill calc', _id: 3 },
];
