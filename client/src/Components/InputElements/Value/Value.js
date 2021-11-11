import './Value.css';
import { useState } from 'react';

export function ValueInput(props) {
  const initialMeta = {
    name: 'ValueInput',
    elementIndex: props.elementIndex,
    elementLetter: props.elementLetter,
    elementDescription: props.elementDescription,
    value: props.elementDescription,
  };
  const [meta, setMeta] = useState(initialMeta);
  return (
    <div className="input-ctn">
      <label className="label" htmlFor="widget-input">
        Input
      </label>
      <div>
        <input type="number" id="widget-input" placeholder="Number"></input>
      </div>
    </div>
  );
}
