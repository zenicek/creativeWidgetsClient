import './Widget.list.css';
import { WidgetPreview } from '../WidgetPreview/Widget.preview';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../Utils/CustomHooks';

export function WidgetList() {
  const widgets = useAppSelector(state => state.widgets);

  const renderWidgets = () => {
    if (widgets) {
      return widgets.map(widget => {
        return (
          <li key={widget._id}>
            <Link to={`/edit/${widget._id}`}>
              <WidgetPreview widget={widget} />
            </Link>
          </li>
        );
      });
    } else {
      return [];
    }
  };

  return (
    <ul className="widget-list-ctn">
      <li key="newWidget">
        <Link to="/new-widget" role="widget-preview-link">
          <WidgetPreview />
        </Link>
      </li>
      {renderWidgets()}
    </ul>
  );
}
