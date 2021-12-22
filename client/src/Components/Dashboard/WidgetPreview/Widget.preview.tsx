import './Widget.preview.css';
import { ReactComponent as CalcIcon } from '../Icons/calculator-icon.svg';
import { AllWidgets } from '../../../Types/StateTypes/AllWidgets';

interface Props {
  widget?: AllWidgets;
}

export const WidgetPreview: React.FC<Props> = ({ widget }) => {
  return (
    <div className="widget-pv-ctn">
      <div className="img-prv-ctn" role="widget-or-calc">
        {widget ? <CalcIcon /> : '+'}
      </div>
      <span role="widget-or-new">{widget ? widget.name : 'New widget'}</span>
    </div>
  );
};
