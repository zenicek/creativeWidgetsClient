import './Slider.css';
import React, { useContext, useRef, useEffect } from 'react';
import { IndividualWidget } from '../../../Utils/Contexts';
import { useArrangeElement } from '../../../Utils/CustomHooks';
import InputProps from '../InputProps';
import { Element } from '../../../Types/Element';

export const Slider: React.FC<InputProps> = ({ id, index, moveElement }) => {
  const individualWidgetContext = useContext(IndividualWidget);
  const element = useRef<Element | null>(null);

  useEffect(() => {
    if (individualWidgetContext?.findElement) {
      element.current = { ...individualWidgetContext.findElement(id) };
    }
  }, []);

  const handleSlideChange = (value: string) => {
    if (element.current && individualWidgetContext) {
      element.current.value = Number(value);
      individualWidgetContext.updateElement(id, element.current);
    }
  };

  //this creates slider marks (TODO: refactor a make nice if have time)
  const marks = () => {
    const options = [];
    if (element.current?.min && element.current?.max) {
      for (let i = element.current.min; i <= element.current.max; i++) {
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

  const RenderWidgetSlider = () => {
    if (element.current) {
      return (
        <>
          <label>
            {element.current.elementDescription} - {element.current.value}
          </label>
          <div>
            <input
              type='range'
              id='slider'
              min={element.current.min}
              max={element.current.max}
              step={element.current.step}
              value={element.current.value}
              onChange={(e) => handleSlideChange(e.target.value)}
              list='tickmarks'
            ></input>
            <datalist id='tickmarks'>{marks()}</datalist>
          </div>
        </>
      );
    } else return <></>;
  };
  return (
    <div
      className='slider-ctn'
      ref={ref}
      style={{ opacity: isDragging ? 0.5 : 1 }}
      data-handler-id={handlerId}
    >
      <RenderWidgetSlider />
    </div>
  );
};
