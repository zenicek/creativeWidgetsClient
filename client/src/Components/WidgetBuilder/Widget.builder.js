import './Widget.builder.css';
import { SettingsBar } from './SettingsBar/Settings';
import { ElementsList } from './ElementsList/Elements.list';
import { WidgetContainer } from './WidgetContainer/Widget.container';
import { useEffect, useState } from 'react';
import { IndividualWidget, WidgetContext } from '../../Utils/Contexts';
import { useParams } from 'react-router';
import { getWidget } from '../../Utils/ApiService';
import { ResultsSiderbar } from './ResultsSetup/ResultsSidebar/Results.sidebar';
import { nanoid } from 'nanoid';

export function WidgetBuilder() {
  const [loadResultsPage, setLoadResultsPage] = useState(false);
  //extract id from the url and then get the context(if exists) and set the the state of settings once async operation has finished
  const { id } = useParams();
  const [widget, setWidget] = useState(WidgetContext);
  //all context logic lives here
  const context = {
    widget,
    setWidget,
    //add element metadata
    addElement: meta => {
      setWidget({
        ...widget,
        elements: [...widget.elements, { ...meta, id: nanoid() }],
      });
    },
    //update specific element in the elements list
    updateElement: (id, element) => {
      const updatedEls = widget.elements.map(el => {
        if (el._id === id || el.id === id) return { ...element };
        else return el;
      });
      setWidget({ ...widget, elements: [...updatedEls] });
    },
    findElement: id => {
      return widget.elements.find(el =>
        el._id ? el._id === id : el.id === id
      );
    },
  };

  useEffect(() => {
    if (id) {
      getWidget(id).then(res => {
        setWidget({ ...res });
      });
    }
  }, [id]);
  //TODO change the context in the widget and dispatch to the db when user changes stuff

  return (
    <IndividualWidget.Provider value={context}>
      <div className="widget-builder-ctn">
        <SettingsBar results={{ loadResultsPage, setLoadResultsPage }} />
        <div className="build-ctn">
          {loadResultsPage ? (
            <ResultsSiderbar />
          ) : (
            <div id="element-list-ctn">
              <ElementsList />
            </div>
          )}
          <div id="widget-build-ctn">
            <WidgetContainer loadResults={loadResultsPage} />
          </div>
        </div>
      </div>
    </IndividualWidget.Provider>
  );
}
