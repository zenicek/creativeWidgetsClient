import './Value.css';
import { useContext } from 'react';
import { IndividualWidget } from '../../../Utils/Contexts';

export function ValueInput({ id }) {
  const { updateElement, findElement } = useContext(IndividualWidget);

  const element = { ...findElement(id) };

  const handleInputChange = value => {
    element.value = value;
    updateElement(id, element);
  };

  return (
    <div className="input-ctn">
      <label className="label" htmlFor="widget-input">
        {element.elementDescription}
      </label>
      <div>
        <input
          type="text"
          pattern="[0-9]*"
          className="input"
          id="widget-input"
          placeholder="Number"
          value={element.value === null ? '' : element.value}
          onChange={e => handleInputChange(e.target.value)}
        ></input>
      </div>
    </div>
  );
}
