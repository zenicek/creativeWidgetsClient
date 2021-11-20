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
  const individualWidgetContext = useContext(IndividualWidget);
  const element = useRef<Element | null>(null);
  const [selectedOption, setSelectedOption] = useState<number | string | null>(
    null
  );

  useEffect(() => {
    if (individualWidgetContext?.findElement) {
      element.current = { ...individualWidgetContext.findElement(id) };
      setSelectedOption(element.current.value);
    }
  }, []);

  const handleChange = (e: Option | null) => {
    if (e && element.current && individualWidgetContext?.updateElement) {
      element.current.value = e.value;
      setSelectedOption(e.value);
      individualWidgetContext.updateElement(id, element.current);
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
    if (element.current?.list) {
      return (
        <>
          <label htmlFor='widget-list'>
            {element.current.elementDescription}
          </label>
          <div>
            <Select
              options={element.current.list}
              onChange={(e) => handleChange(e)}
              value={element.current.list.filter(
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
