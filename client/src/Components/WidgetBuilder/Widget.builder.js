import './Widget.builder.css';
import { SettingsBar } from './SettingsBar/Settings';
import { ElementsList } from './ElementsList/Elements.list';
import { WidgetContainer } from './WidgetContainer/Widget.container';
import { useEffect, useState } from 'react';
import { IndividualWidget, WidgetContext } from '../../Utils/Contexts';
import { useParams } from 'react-router';
import { getWidget } from '../../Utils/ApiService';

export function WidgetBuilder() {
  //extract id from the url and then get the context(if exists) and set the the state of settings once async operation has finished

  const { id } = useParams();
  const [widget, setWidget] = useState(WidgetContext);
  const context = { widget, setWidget };
  useEffect(() => {
    if (id) {
      getWidget(id).then(res => {
        setWidget({ ...res });
      });
    }
  }, [id]);

  useEffect(() => {
    console.log(widget);
  }, [widget]);
  //TODO change the context in the widget and dispatch to the db when user changes stuff

  return (
    <IndividualWidget.Provider value={context}>
      <div className="widget-builder-ctn">
        {/* {JSON.stringify(widget)} */}
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
    </IndividualWidget.Provider>
  );
}
