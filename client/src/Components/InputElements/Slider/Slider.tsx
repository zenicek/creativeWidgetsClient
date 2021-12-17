import './Slider.css';
import React, { useRef } from 'react';
import { useIndividualWidgetContext } from '../../../Utils/Contexts';
import { useArrangeElement } from '../../../Utils/CustomHooks';
import InputProps from '../../../Types/InputProps';
import { Elements } from '../../../Types/Element';

export const Slider: React.FC<InputProps> = ({ id, index, moveElement }) => {
  const { findElement, updateElement } = useIndividualWidgetContext();

  const findSliderElement = (element: Elements | undefined) => {
    if (element && element.type === 'Slider') {
      return element;
    }
    throw new Error('The slider was promised to be always here!');
  };
  const element = { ...findSliderElement(findElement(id)) };

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
  const ref = useRef(null);
  const { drag, drop, isDragging, handlerId } = useArrangeElement(
    ref,
    id,
    index,
    moveElement
  );
  drag(drop(ref));
  //TODO Slider rearranges but doesnt slide in the edit. need to redo or target it differently
  //TODO check out rc-slider npm package and potentially use that since it has all the marks etc nicely done...

  return (
    <div
      className="slider-ctn"
      ref={ref}
      style={{ opacity: isDragging ? 0.5 : 1 }}
      data-handler-id={handlerId}
    >
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
