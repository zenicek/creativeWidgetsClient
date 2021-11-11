import { Slider } from '../../InputElements/Slider/Slider';
import { ValueInput } from '../../InputElements/Value/Value';
import './Widget.container.css';

export function WidgetContainer() {
  return (
    <div className="widget-builder-main-ctn">
      <div className="widget-dnd-ctn">
        <Slider />
        <ValueInput />
        <Slider />
        <ValueInput />
        <Slider />
        <ValueInput />
        <Slider />
      </div>
      <div className="results-ctn">HERE ARE RESULTS</div>
    </div>
  );
}
