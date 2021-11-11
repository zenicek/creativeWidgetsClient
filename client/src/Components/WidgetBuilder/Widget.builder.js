import './Widget.builder.css';
import { SettingsBar } from './SettingsBar/Settings';
import { ElementsList } from './ElementsList/Elements.list';

export function WidgetBuilder() {
  return (
    <div className="widget-builder-ctn">
      <SettingsBar />
      <div className="build-ctn">
        <div id="element-list-ctn">
          <ElementsList />
        </div>
        <div id="widget-build-ctn"> BUILD AREA HERE</div>
      </div>
    </div>
  );
}
