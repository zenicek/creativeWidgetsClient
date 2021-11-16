import { useContext, useState, useRef } from 'react';
import { IndividualWidget } from '../../../Utils/Contexts';
import './List.css';
import Select from 'react-select';
import { elementTypes } from '../Elements.types';
import { useDrag, useDrop } from 'react-dnd';

export function List({ id, index, moveElement }) {
  const { findElement, updateElement } = useContext(IndividualWidget);
  const element = { ...findElement(id) };
  const [selectedOption, setSelectedOption] = useState(element.value);

  const handleChange = e => {
    element.value = e.value;
    setSelectedOption(e.value);
    updateElement(id, element);
  };

  //DND within the elements (need to check if this can be placed outside of the element)
  const ref = useRef(null);
  const [{ handlerId }, drop] = useDrop({
    accept: elementTypes,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveElement(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: 'Slider',
    item: () => {
      return { id, index };
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });
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
