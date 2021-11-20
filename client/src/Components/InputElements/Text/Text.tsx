import './Text.css';
import { useContext, useRef, useEffect } from 'react';
import { IndividualWidget } from '../../../Utils/Contexts';
import { useArrangeElement } from '../../../Utils/CustomHooks';
import InputProps from '../InputProps';
import { Element } from '../../../Types/Element';

export const Text: React.FC<InputProps> = ({ id, index, moveElement }) => {
  const individualWidgetContext = useContext(IndividualWidget);
  let element: Element;

  useEffect(() => {
    if (individualWidgetContext?.findElement) {
      element = { ...individualWidgetContext.findElement(id) };
    }
  }, []);

  const ref = useRef(null);
  const { drag, drop, isDragging, handlerId } = useArrangeElement(
    ref,
    id,
    index,
    moveElement
  );

  const renderDesc = () => {
    if (element) return element.elementDescription;
    else return '';
  };

  drag(drop(ref));
  return (
    <h3
      ref={ref}
      style={{ opacity: isDragging ? 0.7 : 1 }}
      data-handler-id={handlerId}
    >
      {renderDesc()}
    </h3>
  );
};
