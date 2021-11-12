import './Widget.builder.css';
import { SettingsBar } from './SettingsBar/Settings';
import { ElementsList } from './ElementsList/Elements.list';
import { WidgetContainer } from './WidgetContainer/Widget.container';
import { useEffect, useState } from 'react';
import { IndividualWidget } from '../../Utils/Contexts';
import { useParams } from 'react-router';
import { getWidget } from '../../Utils/ApiService';

export function WidgetBuilder() {
  //extract id from the url and then get the context(if exists) and set the the state of settings once async operation has finished

  const initialState = {
    elements: [],
    formula: '',
    name: 'default calculator',
    lastLetter: 'A',
    width: 720,
  };
  const { id } = useParams();

  const [widget, setWidget] = useState(initialState);
  useEffect(() => {
    if (id) {
      getWidget(id).then(res => {
        setWidget(res);
      });
    }
  }, []);

  //TODO change the context in the widget and dispatch to the when user changes staff

  return (
    <IndividualWidget.Provider value={widget}>
      <div className="widget-builder-ctn">
        {JSON.stringify(widget)}
        {console.log(widget.name)}
        <h1>{(widget.name, widget.width)}</h1>
        <SettingsBar name={widget.name} width={widget.width} />
        <div className="build-ctn">
          <div id="element-list-ctn">
            <ElementsList />
          </div>
          <div id="widget-build-ctn">
            <WidgetContainer elems={widget.elements} />
          </div>
        </div>
      </div>
    </IndividualWidget.Provider>
  );
}
