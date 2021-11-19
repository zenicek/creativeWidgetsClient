import './Value.css';
import { useContext, useRef } from 'react';
import { IndividualWidget } from '../../../Utils/Contexts';
import { useArrangeElement } from '../../../Utils/CustomHooks';
import InputProps from '../InputProps';

export const ValueInput: React.FC<InputProps> = ({
  id,
  index,
  moveElement,
}) => {
  const { updateElement, findElement } = useContext(IndividualWidget);

  const element = { ...findElement(id) };

  const handleInputChange = (value: string) => {
    element.value = value;
    updateElement(id, element);
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
          onChange={(e) => handleInputChange(e.target.value)}
        ></input>
      </div>
    </div>
  );
};
