import { useContext, useState, useRef } from 'react';
import { IndividualWidget } from '../../../Utils/Contexts';
import './List.css';
import Select from 'react-select';
import { useArrangeElement } from '../../../Utils/CustomHooks';

export function List({ id, index, moveElement }) {
  const { findElement, updateElement } = useContext(IndividualWidget);
  const element = { ...findElement(id) };
  const [selectedOption, setSelectedOption] = useState(element.value);

  const handleChange = e => {
    element.value = e.value;
    setSelectedOption(e.value);
    updateElement(id, element);
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

  return (
    <div
      className="input-ctn"
      ref={ref}
      style={{ opacity: isDragging ? 0.5 : 1 }}
      data-handler-id={handlerId}
    >
      <label htmlFor="widget-list">{element.elementDescription}</label>
      <div>
        <Select
          options={element.list}
          onChange={e => handleChange(e)}
          value={element.list.filter(option => option.value === selectedOption)}
        />
      </div>
    </div>
  );
}
