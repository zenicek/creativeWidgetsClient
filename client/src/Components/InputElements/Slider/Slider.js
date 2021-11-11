import './Slider.css';
import { useState } from 'react';

export function Slider(props) {
  //initials metadata
  const initialMeta = {
    elementType: 'Slider',
    elmentIndex: 0,
    elementLetter: 'A',
    elementDescription: 'Slider',
    value: 0,
    min: 0,
    max: 10,
  };
  const [metas, setMeta] = useState(initialMeta);

  const marks = num => {
    const options = [];
    for (let i = 0; i <= num; i++) {
      options.push(<option key={i} value={i} label={i}></option>);
    }
    return options;
  };
  return (
    <div className="slider-ctn">
      <label>Slider</label>
      <div>
        <input
          type="range"
          id="slider"
          min="0"
          max="10"
          step="1"
          list="tickmarks"
        ></input>
        <datalist id="tickmarks">{marks(10)}</datalist>
      </div>
    </div>
  );
}
