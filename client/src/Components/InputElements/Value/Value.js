import './Value.css';
import { useState } from 'react';

export function ValueInput(props) {
  const initialMeta = {
    name: 'ValueInput',
    elementIndex: 0,
    elementLetter: 'A', //this needs to be then changed to check last letter
    elementDescription: 'Input',
    value: '',
  };
  const [meta, setMeta] = useState(initialMeta);
  return (
    <div className="input-ctn">
      <label className="label" htmlFor="widget-input">
        {meta.elementDescription}
      </label>
      <div>
        <input
          type="number"
          id="widget-input"
          placeholder="Number"
          value={meta.value}
          onChange={e => setMeta(e.target.value)}
        ></input>
      </div>
    </div>
  );
}
