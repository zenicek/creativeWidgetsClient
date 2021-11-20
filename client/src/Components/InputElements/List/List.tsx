import React, { useContext, useState, useRef, useEffect } from 'react';
import { IndividualWidget } from '../../../Utils/Contexts';
import './List.css';
import Select from 'react-select';
import { useArrangeElement } from '../../../Utils/CustomHooks';
import InputProps from '../InputProps';
import { Element } from '../../../Types/Element';

interface Option {
  id: string;
  label: any;
  value: number;
  offValue: number;
  selected: boolean;
}

export const List: React.FC<InputProps> = ({ id, index, moveElement }) => {
  // const { findElement, updateElement } = useContext(IndividualWidget);
  const individualWidgetContext = useContext(IndividualWidget);
  // const element = { ...findElement(id) };
  let element: Element;
  const [selectedOption, setSelectedOption] = useState<number | string | null>(
    null
  );

  useEffect(() => {
    if (individualWidgetContext?.findElement) {
      element = { ...individualWidgetContext.findElement(id) };
      setSelectedOption(element.value);
    }
  }, []);

  const handleChange = (e: Option | null) => {
    if (e) {
      element.value = e.value;
      setSelectedOption(e.value);
    }
    if (individualWidgetContext?.updateElement) {
      individualWidgetContext.updateElement(id, element);
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
    if (element?.list) {
      return (
        <>
          <label htmlFor='widget-list'>{element.elementDescription}</label>
          <div>
            <Select
              options={element.list}
              onChange={(e) => handleChange(e)}
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
      className='input-ctn'
      ref={ref}
      style={{ opacity: isDragging ? 0.5 : 1 }}
      data-handler-id={handlerId}
    >
      <RenderedWidgetList />
    </div>
  );
};
