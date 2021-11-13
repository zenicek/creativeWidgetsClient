import './Widget.preview.css';
import { ReactComponent as IconSvg } from '../Icons/calculator-icon.svg';

export function WidgetPreview({ widget }) {
  return (
    <div className="widget-pv-ctn">
      <div className="img-prv-ctn">{widget ? <IconSvg /> : '+'}</div>
      <span>{widget ? widget.name : 'New widget'}</span>
    </div>
  );
}
