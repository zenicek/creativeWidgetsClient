import './Slider.css';
import React, { useRef } from 'react';
import InputProps from '../../../Types/InputProps';
import { useCalcElementHandler } from '../../../Utils/CustomHooks';

export const Slider: React.FC<InputProps> = ({ id, index, moveElement }) => {
  const { findSliderElement, updateElement } = useCalcElementHandler();
  const element = { ...findSliderElement(id) };

  const handleSlideChange = (value: string) => {
    element.value = Number(value);
    updateElement(id, element);
  };

  //this creates slider marks (TODO: refactor a make nice if have time)
  const marks = () => {
    const options = [];
    if (element.min && element.max) {
      for (let i = element.min; i <= element.max; i++) {
        options.push(
          <option key={i} value={i} label={i % 2 ? '' : String(i)}></option>
        );
      }
    }
    return options;
  };

  //DND
  // const ref = useRef(null);
  // const { drag, drop, isDragging, handlerId } = useArrangeElement(
  //   ref,
  //   id,
  //   index,
  //   moveElement
  // );
  // drag(drop(ref));
  //TODO Slider rearranges but doesnt slide in the edit. need to redo or target it differently
  //TODO check out rc-slider npm package and potentially use that since it has all the marks etc nicely done...

  return (
    <div className="slider-ctn">
      <label>
        {element.description} - {element.value}
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
};
