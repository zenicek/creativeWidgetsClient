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
import { nextChar } from '../../Utils/Helpers';

export function WidgetBuilder() {
  const [loadResultsPage, setLoadResultsPage] = useState(false);
  //extract id from the url and then get the context(if exists) and set the the state of settings once async operation has finished
  const { id } = useParams();
  const [widget, setWidget] = useState(WidgetContext);
  //all context logic lives here
  //TODO move the context to the separte element within the Contexts.js and just import, can you do the API call within the context to set it initially??
  const context = {
    widget,
    setWidget,
    //add element metadata
    addElement: meta => {
      const element = {
        ...meta,
        id: nanoid(),
        elementLetter:
          meta.elementType !== 'Text' && nextChar(widget.lastLetter),
      };
      setWidget({
        ...widget,
        elements: [...widget.elements, { ...element }],
        lastLetter:
          meta.elementType !== 'Text'
            ? element.elementLetter
            : widget.lastLetter,
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
    //function to rearrange elements on the dnd within the container
    arrangeElements: elements => {
      setWidget({ ...widget, elements: [...elements] });
    },
    //to find element in the array
    findElement: id => {
      return widget.elements.find(el =>
        el._id ? el._id === id : el.id === id
      );
    },
    //update formula
    updateFormula: formula => {
      setWidget({ ...widget, formula: formula });
    },
    //add result descriptions
    updateResultDesc: resultDesc => {
      setWidget({ ...widget, resultDescription: resultDesc });
    },
    updateResultValueDesc: resultValDesc => {
      setWidget({ ...widget, resultValueDesc: resultValDesc });
    },
  };

  useEffect(() => {
    if (id) {
      getWidget(id).then(res => {
        setWidget({ ...res });
      });
    } else {
      setWidget(WidgetContext);
    }
  }, [id]);
  //TODO dispatch to the db dynamically every XX seconds when user changes stuff

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
