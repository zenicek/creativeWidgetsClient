import React, { useState, useRef } from 'react';
import { useIndividualWidgetContext } from '../../../Utils/Contexts';
import './List.css';
import Select, { SingleValue } from 'react-select';
import { useArrangeElement } from '../../../Utils/CustomHooks';
import InputProps from '../../../Types/InputProps';
import Option from '../../../Types/Option';
import { Elements } from '../../../Types/Element';

export const List: React.FC<InputProps> = ({ id, index, moveElement }) => {
  const { findElement, updateElement } = useIndividualWidgetContext();

  const findListElement = (element: Elements) => {
    if (element && element.__kind === 'List') {
      return element;
    }
    throw new Error('The list was promised to be always here!');
  };
  const element = { ...findListElement(findElement(id)) };

  const [selectedOption, setSelectedOption] = useState(element.value);

  const handleChange = (e: SingleValue<Option> | null) => {
    if (e?.value && element) {
      element.value = e.value;
      setSelectedOption(e.value);
      updateElement(id, element);
    }
  };

  //DND within the elements
  const ref = useRef(null);
  const { drag, drop, isDragging, handlerId } = useArrangeElement(
    ref,
    id,
    index,
    moveElement
  );
  drag(drop(ref));

  const RenderedWidgetList = () => {
    if (element.list) {
      return (
        <>
          <label htmlFor="widget-list">{element.description}</label>
          <div>
            <Select
              options={element.list}
              onChange={handleChange}
              value={element.list.filter(
                (option: Option) => option.value === selectedOption
              )}
            />
          </div>
        </>
      );
    } else return <></>;
  };

  return (
    <div
      className="input-ctn"
      ref={ref}
      style={{ opacity: isDragging ? 0.5 : 1 }}
      data-handler-id={handlerId}
    >
      <RenderedWidgetList />
    </div>
  );
};
