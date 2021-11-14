import './Element.setup.css';
import { useContext } from 'react';
import { IndividualWidget } from '../../../../Utils/Contexts';
import { SliderOptions } from './ElementSetupOptions/Slider.option';
import { ListItemSetup } from './ElementSetupOptions/List.option';

export function ElementSetup({ id }) {
  const { updateElement, findElement } = useContext(IndividualWidget);

  const element = { ...findElement(id) };

  const handleSliderSetup = (range, step) => {
    const [min, max] = range;
    element.min = min;
    element.max = max;
    element.step = step;
    updateElement(id, element);
  };

  const optionElement = () => {
    if (element.elementType === 'Slider') {
      return (
        <SliderOptions
          min={element.min}
          max={element.max}
          step={element.step}
          handleSliderSetup={handleSliderSetup}
        />
      );
    }
    if (element.elementType === 'List') {
      return (
        <div>
          <button id="add-item">Add Item</button>
          <ListItemSetup />
        </div>
      );
    }
  };
  const handleListSetup = optionsList => {};

  return (
    <div className="element-setup-ctn">
      <div id="letter-ctn">{element.elementLetter}</div>
      <div className="description-ctn">{element.elementDescription}</div>
      {optionElement()}
    </div>
  );
}
