import './Slider.css';
import { useContext } from 'react';
import { IndividualWidget } from '../../../Utils/Contexts';

export function Slider({ id }) {
  const { updateElement, findElement } = useContext(IndividualWidget);
  //initial metadata

  //needs to be a copy - immutability
  const element = { ...findElement(id) };

  const handleSlideChange = e => {
    element.value = Number(e.target.value);
    updateElement(id, element);
  };

  const marks = () => {
    const options = [];
    for (let i = 0; i <= element.max; i++) {
      options.push(<option key={i} value={i} label={i % 2 ? '' : i}></option>);
    }
    return options;
  };
  return (
    <div className="slider-ctn">
      <label>
        {element.elementDescription} - {element.value}
      </label>
      <div>
        <input
          type="range"
          id="slider"
          min={element.min}
          max={element.max}
          step={element.step}
          value={element.value}
          onChange={e => handleSlideChange(e)}
          list="tickmarks"
        ></input>
        <datalist id="tickmarks">{marks()}</datalist>
      </div>
    </div>
  );
}
