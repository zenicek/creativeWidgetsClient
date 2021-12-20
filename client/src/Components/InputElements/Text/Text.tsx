import './Text.css';
import { useRef } from 'react';
import { useArrangeElement } from '../../../Utils/CustomHooks/DndHook';
import InputProps from '../../../Types/InputProps';
import { useCalcElementHandler } from '../../../Utils/CustomHooks';

export const Text: React.FC<InputProps> = ({ id, index, moveElement }) => {
  const { findTextElement } = useCalcElementHandler();
  const element = { ...findTextElement(id) };

  const ref = useRef(null);
  const { drag, drop, isDragging, handlerId } = useArrangeElement(
    ref,
    id,
    index,
    moveElement
  );
  drag(drop(ref));

  return (
    <h3
      ref={ref}
      style={{ opacity: isDragging ? 0.7 : 1 }}
      data-handler-id={handlerId}
    >
      {element.description}
    </h3>
  );
};
