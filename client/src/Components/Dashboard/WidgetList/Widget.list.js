import './Widget.list.css';
import { WidgetPreview } from '../WidgetPreview/Widget.preview';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { WidgetsContext } from '../../../Utils/Contexts';

export function WidgetList() {
  const { widgets } = useContext(WidgetsContext);

  const widgetsList = widgets.map(widget => {
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
      {widgetsList}
    </ul>
  );
}
