import './Value.css';
import { useRef } from 'react';
import { useAppSelector, useArrangeElement } from '../../../Utils/CustomHooks';
import InputProps from '../../../Types/InputProps';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../States';
import { useDispatch } from 'react-redux';
export const ValueInput: React.FC<InputProps> = ({
  id,
  index,
  moveElement,
}) => {
  const { updateElement } = bindActionCreators(actionCreators, useDispatch());
  const widget = useAppSelector(state => state.calculator);

  const findValueElement = (id: string) => {
    const element = widget.elements.find(el => el._id === id || el.id === id);
    if (element && element.__kind === 'ValueInput') {
      return element;
    }
    // throw new Error('The value input was promised to be always here!');
  };

  const element = { ...findValueElement(id) };
  console.log(element);
  console.log(widget);

  const handleInputChange = (value: string) => {
    element.value = value;
    //@ts-ignore
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
