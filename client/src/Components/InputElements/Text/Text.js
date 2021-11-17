import './Text.css';
import { useContext, useRef } from 'react';
import { IndividualWidget } from '../../../Utils/Contexts';
import { useArrangeElement } from '../../../Utils/CustomHooks';

export function Text({ id, index, moveElement }) {
  const { findElement } = useContext(IndividualWidget);
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
}
