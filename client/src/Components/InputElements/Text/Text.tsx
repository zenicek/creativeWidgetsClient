import './Text.css';
import { useRef } from 'react';
import { useIndividualWidgetContext } from '../../../Utils/Contexts';
import { useArrangeElement } from '../../../Utils/CustomHooks';
import InputProps from '../../../Types/InputProps';

export const Text: React.FC<InputProps> = ({ id, index, moveElement }) => {
  const { findElement } = useIndividualWidgetContext();
  const element = { ...findElement(id) };

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
      {element.elementDescription}
    </h3>
  );
};
