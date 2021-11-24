import './Widget.builder.css';
import { SettingsBar } from './SettingsBar/Settings';
import { ElementsList } from './ElementsList/Elements.list';
import { WidgetContainer } from './WidgetContainer/Widget.container';
import { useEffect, useState } from 'react';
import { IndividualWidget, WidgetContext } from '../../Utils/Contexts';
import { useParams } from 'react-router';
import { getWidget } from '../../Utils/ApiService';
import { ResultsSiderbar } from './ResultsSetup/ResultsSidebar/Results.sidebar';
import { InitialContext } from '../../Utils/InitialContext';

export function WidgetBuilder() {
  const [loadResultsPage, setLoadResultsPage] = useState(false);
  //extract id from the url and then get the context(if exists) and set the the state of settings once async operation has finished
  const { id } = useParams();
  const [widget, setWidget] = useState(WidgetContext);

  // moved context logic into Utils/Intitial context

  const context = InitialContext(widget, setWidget);

  useEffect(() => {
    if (id) {
      getWidget(id).then((res) => {
        context.setWidget({ ...res });
      });
    } else {
      context.setWidget(WidgetContext);
    }
  }, [id]);

  //TODO dispatch to the db dynamically every XX seconds when user changes stuff

  return (
    <IndividualWidget.Provider value={context}>
      <div className="widget-builder-ctn" role="widget-builder">
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
