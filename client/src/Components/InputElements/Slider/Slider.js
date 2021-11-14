import './Slider.css';
import { useContext } from 'react';
import { IndividualWidget } from '../../../Utils/Contexts';

export function Slider({ id }) {
  const { updateElement, findElement } = useContext(IndividualWidget);

  //needs to be a copy - immutability
  const element = { ...findElement(id) };

  //TODO once you create editable other fields - here you can update other values
  const handleSlideChange = value => {
    element.value = Number(value);
    updateElement(id, element);
  };

  //this creates slider marks (TODO: refactor a make nice if have time)
  const marks = () => {
    const options = [];
    for (let i = element.min; i <= element.max; i++) {
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
          onChange={e => handleSlideChange(e.target.value)}
          list="tickmarks"
        ></input>
        <datalist id="tickmarks">{marks()}</datalist>
      </div>
    </div>
  );
}
