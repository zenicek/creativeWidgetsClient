import './Widget.builder.css';
import { SettingsBar } from './SettingsBar/Settings';
import { ElementsList } from './ElementsList/Elements.list';
import { WidgetContainer } from './WidgetContainer/Widget.container';

export function WidgetBuilder() {
  return (
    <div className="widget-builder-ctn">
      <SettingsBar />
      <div className="build-ctn">
        <div id="element-list-ctn">
          <ElementsList />
        </div>
        <div id="widget-build-ctn">
          <WidgetContainer />
        </div>
      </div>
    </div>
  );
}
