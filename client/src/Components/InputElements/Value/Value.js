import './Value.css';
import { useContext } from 'react';
import { IndividualWidget } from '../../../Utils/Contexts';

export function ValueInput({ id }) {
  const { updateElement, findElement } = useContext(IndividualWidget);

  const element = { ...findElement(id) };

  const handleInputChange = value => {
    element.value = Number(value);
    updateElement(id, element);
  };

  return (
    <div className="input-ctn">
      <label className="label" htmlFor="widget-input">
        {element.elementDescription}
      </label>
      <div>
        <input
          type="number"
          id="widget-input"
          placeholder="Number"
          value={element.value}
          onChange={e => handleInputChange(e.target.value)}
        ></input>
      </div>
    </div>
  );
}
