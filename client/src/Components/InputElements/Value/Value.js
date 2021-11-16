import './Value.css';
import { useContext, useRef } from 'react';
import { IndividualWidget } from '../../../Utils/Contexts';
import { elementTypes } from '../Elements.types';
import { useDrag, useDrop } from 'react-dnd';

export function ValueInput({ id, index, moveElement }) {
  const { updateElement, findElement } = useContext(IndividualWidget);

  const element = { ...findElement(id) };

  const handleInputChange = value => {
    element.value = value;
    updateElement(id, element);
  };

  const ref = useRef(null);
  //DND within the elements (need to check if this can be placed outside of the element)
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
    type: 'ValueInput',
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
      <label className="label" htmlFor="widget-input">
        {element.elementDescription}
      </label>
      <div>
        <input
          type="text"
          pattern="[0-9]*"
          className="input"
          id="widget-input"
          placeholder="Number"
          value={element.value === null ? '' : element.value}
          onChange={e => handleInputChange(e.target.value)}
        ></input>
      </div>
    </div>
  );
}
