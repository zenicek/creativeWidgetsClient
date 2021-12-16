import './Widget.builder.css';
import { SettingsBar } from './SettingsBar/Settings';
import { ElementsList } from './ElementsList/Elements.list';
import { WidgetContainer } from './WidgetContainer/Widget.container';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getWidget } from '../../Utils/ApiService';
import { ResultsSiderbar } from './ResultsSetup/ResultsSidebar/Results.sidebar';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../../States';
import { bindActionCreators } from 'redux';

export function WidgetBuilder() {
  const [loadResultsPage, setLoadResultsPage] = useState(false);
  //extract id from the url and then get the context(if exists) and set the the state of settings once async operation has finished

  const { id } = useParams();
  const { setCalculator } = bindActionCreators(actionCreators, useDispatch());
  useEffect(() => {
    if (id) {
      getWidget(id).then(res => {
        setCalculator({ ...res });
      });
    }
  }, [id]);

  //TODO dispatch to the db dynamically every XX seconds when user changes stuff

  return (
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
  );
}
