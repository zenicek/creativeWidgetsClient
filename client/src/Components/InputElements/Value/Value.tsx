import './Value.css';
import { useRef } from 'react';
import { useCalcElementHandler } from '../../../Utils/CustomHooks';
import InputProps from '../../../Types/InputProps';
export const ValueInput: React.FC<InputProps> = ({
  id,
  index,
  moveElement,
}) => {
  const { findValueInputElement, updateElement } = useCalcElementHandler();

  const element = { ...findValueInputElement(id) };

  const handleInputChange = (value: string) => {
    element.value = value;
    updateElement(id, element);
  };

  //DND
  // const ref = useRef(null);
  // const { drag, drop, isDragging, handlerId } = useArrangeElement(
  //   ref,
  //   id,
  //   index,
  //   moveElement
  // );
  // drag(drop(ref));

  return (
    <div className="input-ctn">
      <label className="label" htmlFor="widget-input">
        {element.description}
      </label>
      <div>
        <input
          type="text"
          pattern="[0-9]*"
          className="input"
          id="widget-input"
          placeholder="Number"
          value={element.value}
          onChange={e => {
            e.preventDefault();
            handleInputChange(e.target.value);
          }}
        ></input>
      </div>
    </div>
  );
};
