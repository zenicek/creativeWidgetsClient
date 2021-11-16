import './Element.setup.css';
import { useContext, useState } from 'react';
import { IndividualWidget } from '../../../../Utils/Contexts';
import { SliderOptions } from './ElementSetupOptions/Slider.option';
import { ListItemSetup } from './ElementSetupOptions/List.option';
import { InputToggle } from './ElementSetupOptions/Input.toggle';
import { nanoid } from 'nanoid';

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
  const handleListSetup = option => {
    const updatedOptionList = [
      ...element.list.map(el => {
        if (el.id === option.id) {
          return { ...option };
        } else {
          return el;
        }
      }),
    ];
    element.list = [...updatedOptionList];
    updateElement(id, element);
  };

  const updateElementDescription = value => {
    element.elementDescription = value;
    updateElement(id, element);
  };

  const addListOption = () => {
    const option = {
      id: nanoid(),
      label: '',
      value: '',
    };
    element.list.push({ ...option });
    updateElement(id, element);
  };

  const removeListOption = optionId => {
    element.list = element.list.filter(el => el.id !== optionId);
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
      const list = element.list.map(option => {
        return (
          <ListItemSetup
            key={option.id}
            listItem={option}
            handleListSetup={handleListSetup}
            removeOption={removeListOption}
          />
        );
      });
      return (
        <div>
          <button id="add-item" onClick={() => addListOption()}>
            Add Item
          </button>
          {list}
        </div>
      );
    }
  };

  return (
    <div className="element-setup-ctn">
      <div id="letter-ctn">
        {element.elementLetter !== 'false' ? element.elementLetter : ''}
      </div>
      <div className="description-ctn">
        {' '}
        <InputToggle
          description={element.elementDescription}
          updateWidget={updateElementDescription}
        />
      </div>
      {optionElement()}
    </div>
  );
}
