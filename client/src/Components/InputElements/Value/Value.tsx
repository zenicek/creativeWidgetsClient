import './Value.css';
import { useContext, useRef, useEffect } from 'react';
import { IndividualWidget } from '../../../Utils/Contexts';
import { useArrangeElement } from '../../../Utils/CustomHooks';
import InputProps from '../InputProps';
import { Element } from '../../../Types/Element';

export const ValueInput: React.FC<InputProps> = ({
  id,
  index,
  moveElement,
}) => {
  const individualWidgetContext = useContext(IndividualWidget);
  let element: Element;

  useEffect(() => {
    if (individualWidgetContext?.findElement) {
      element = { ...individualWidgetContext.findElement(id) };
    }
  }, []);

  const handleInputChange = (value: string) => {
    if (element && individualWidgetContext) {
      element.value = value;
      individualWidgetContext.updateElement(id, element);
    }
  };

  //DND
  const ref = useRef(null);
  const { drag, drop, isDragging, handlerId } = useArrangeElement(
    ref,
    id,
    index,
    moveElement
  );
  drag(drop(ref));

  const RenderWidgetValue = () => {
    if (element) {
      return (
        <>
          <label className='label' htmlFor='widget-input'>
            {element.elementDescription}
          </label>
          <div>
            <input
              type='text'
              pattern='[0-9]*'
              className='input'
              id='widget-input'
              placeholder='Number'
              value={element.value === null ? '' : element.value}
              onChange={(e) => handleInputChange(e.target.value)}
            ></input>
          </div>
        </>
      );
    } else {
      return <></>;
    }
  };

  return (
    <div
      className='input-ctn'
      ref={ref}
      style={{ opacity: isDragging ? 0.5 : 1 }}
      data-handler-id={handlerId}
    >
      <RenderWidgetValue />
    </div>
  );
};
