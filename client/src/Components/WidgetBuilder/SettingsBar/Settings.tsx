import './Settings.css';
import {
  createWidget,
  removeWidgetInDb,
  updateWidget,
} from '../../../Utils/ApiService';
import { useNavigate, useParams } from 'react-router-dom';
import { ReactComponent as RemoveIcon } from '../ElementsList/Icons/SvgIcons/remove.svg';
import { useAppSelector } from '../../../Utils/CustomHooks';
import { bindActionCreators } from 'redux';
import { actionCreators, widgetCreators } from '../../../States';
import { useDispatch } from 'react-redux';
import React, { ChangeEvent } from 'react';

interface Props {
  results: {
    loadResultsPage: boolean;
    setLoadResultsPage: React.Dispatch<React.SetStateAction<boolean>>;
  };
}
export const SettingsBar: React.FC<Props> = ({ results }) => {
  const widget = useAppSelector(state => state.calculator);

  const { removeWidget } = bindActionCreators(widgetCreators, useDispatch());
  const { setCalculator } = bindActionCreators(actionCreators, useDispatch());

  const { id } = useParams();
  const navigation = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'width') {
      //TODO need to add validations in case its too big
      setCalculator({ ...widget, [e.target.name]: Number(e.target.value) });
    } else {
      setCalculator({ ...widget, [e.target.name]: e.target.value });
    }
  };

  const handleRemove = (id: string) => {
    if (id) {
      removeWidgetInDb(id).then(() => {
        navigation('/');
        removeWidget(id);
      });
    }
  };

  const handleSaveClick = () => {
    //I am assigning the nanoid on the front end which is being replaced on the backend the below is removing any front end IDs
    const cleanWidget = {
      ...widget,
      elements: widget.elements.map(el => {
        if (el.id) {
          const { id, ...element } = el;
          return element;
        }
        return el;
      }),
    };
    //TODO handle if user modifies the widget URL and ID is invalid
    if (!id) {
      createWidget(cleanWidget).then(res => {
        navigation('/edit/' + res._id);
      });
    } else if (cleanWidget._id) {
      updateWidget(cleanWidget._id, cleanWidget);
    }
  };

  //TODO: add the timeout to take effect after user finished typing
  return (
    <div className="settings-bar-ctn">
      <div className="settings-wrapper-ctn">
        <div className="settings-option-ctn">
          <input
            id="toggle-mode"
            type="checkbox"
            name="def-results"
            defaultChecked={results.loadResultsPage}
            onChange={() =>
              results.setLoadResultsPage(!results.loadResultsPage)
            }
          ></input>
          <label htmlFor="def-results">Define Results</label>
        </div>
        {'|'}
        <div className="settings-option-ctn">
          Width(px)
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enableBackground="new 0 0 32 32"
            height="32px"
            width="32px"
            className="svg-icon"
          >
            <g id="size_x5F_width" fill="white">
              <path d="M32,16.001l-6-6v4h-2.001V8h-16v6.001H6v-4l-6,6l6,6v-4h1.999V24h16v-5.999H26v4L32,16.001z M21.999,22h-12V10h12V22z" />
            </g>
          </svg>
          <input
            type="number"
            name="width"
            className="settings-input"
            value={widget.width}
            onChange={e => handleChange(e)}
          ></input>
        </div>
        {'|'}
        <div className="settings-option-ctn">
          Widget Name
          <input
            type="text"
            name="name"
            className="settings-input name-input"
            value={widget.name}
            onChange={e => handleChange(e)}
          ></input>
        </div>
        {'|'}
        <div className="settings-option-ctn">
          <button onClick={() => handleSaveClick()} id="settings-btn">
            Save Widget
          </button>
        </div>
        {'|'}
        <div className="settings-option-ctn">
          <RemoveIcon onClick={() => handleRemove(id ? id : '')} />
        </div>
      </div>
    </div>
  );
};
