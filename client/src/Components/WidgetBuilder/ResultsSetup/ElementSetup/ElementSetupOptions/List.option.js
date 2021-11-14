import './List.option.css';
import { ReactComponent as RemoveIcon } from './remove.svg';

export function ListItemSetup({ listItem, handleListSetup }) {
  return (
    <div className="list-option-ctn">
      <RemoveIcon className="remove-icon" />
      <input
        type="text"
        className="settings-input"
        id="list-option-input"
        placeholder="Option name"
      ></input>
      <div className="settings-desc-ctn" id="list-settings-desc">
        ON
      </div>
      <input
        type="number"
        min="0"
        className="settings-input"
        placeholder="Num"
      ></input>
    </div>
  );
}
