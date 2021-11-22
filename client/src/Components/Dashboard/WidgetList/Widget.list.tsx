import './Widget.list.css';
import { WidgetPreview } from '../WidgetPreview/Widget.preview';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { WidgetsContext } from '../../../Utils/Contexts';
import { Widget } from '../../../Types/Widget';

export function WidgetList() {
  const widgetsContext = useContext(WidgetsContext);

  const renderWidgets = () => {
    if (widgetsContext?.widgets) {
      return widgetsContext.widgets.map((widget: Widget) => {
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
    <ul className='widget-list-ctn'>
      <li key='newWidget'>
        <Link to='/new-widget' role="widget-preview-link">
          <WidgetPreview />
        </Link>
      </li>
      {renderWidgets()}
    </ul>
  );
}
