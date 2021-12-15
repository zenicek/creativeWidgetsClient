import './Text.css';
import { useRef } from 'react';
import { useIndividualWidgetContext } from '../../../Utils/Contexts';
import { useArrangeElement } from '../../../Utils/CustomHooks';
import InputProps from '../../../Types/InputProps';
import { Elements } from '../../../Types/Element';

export const Text: React.FC<InputProps> = ({ id, index, moveElement }) => {
  const { findElement } = useIndividualWidgetContext();

  //TODO: see if you can use __kind to find exactly the type without copying this code in all elements
  const findTextElement = (element: Elements) => {
    if (element && element.__kind === 'Text') {
      return element;
    }
    throw new Error('The text was promised to be always here!');
  };
  const element = { ...findTextElement(findElement(id)) };

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
