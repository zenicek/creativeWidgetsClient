import './List.option.css';
import { ReactComponent as RemoveIcon } from './remove.svg';

export function ListItemSetup({ listItem, handleListSetup, removeOption }) {
  const option = { ...listItem };

  const handleOptionName = name => {
    option.label = name;
    handleListSetup(option);
  };

  const handleOptionValue = value => {
    option.value = Number(value);
    handleListSetup(option);
  };
  return (
    <div className="list-option-ctn">
      <RemoveIcon
        className="remove-icon"
        onClick={() => removeOption(option.id)}
      />
      <input
        type="text"
        className="settings-input"
        id="list-option-input"
        placeholder="Option name"
        value={option.label}
        onChange={e => handleOptionName(e.target.value)}
      ></input>
      <div className="settings-desc-ctn" id="list-settings-desc">
        ON
      </div>
      <input
        type="number"
        min="0"
        className="settings-input"
        placeholder="Num"
        value={option.value}
        onChange={e => handleOptionValue(e.target.value)}
      ></input>
    </div>
  );
}
