import React, { useState, useRef } from 'react';
import './List.css';
import Select, { SingleValue } from 'react-select';
import { useArrangeElement } from '../../../Utils/CustomHooks/DndHook';
import InputProps from '../../../Types/InputProps';
import Option from '../../../Types/Option';
import { useCalcElementHandler } from '../../../Utils/CustomHooks';

export const List: React.FC<InputProps> = ({ id, index, moveElement }) => {
  const { updateElement, findElement } = useCalcElementHandler();
  const element = { ...findElement(id) };

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
    if (element.type === 'List' && element.list) {
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
