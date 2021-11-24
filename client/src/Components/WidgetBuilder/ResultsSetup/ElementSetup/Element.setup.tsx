import './Element.setup.css';
import { useIndividualWidgetContext } from '../../../../Utils/Contexts';
import { SliderOptions } from './ElementSetupOptions/Slider.option';
import { ListItemSetup } from './ElementSetupOptions/List.option';
import { InputToggle } from './ElementSetupOptions/Input.toggle';
import { nanoid } from 'nanoid';
import Option from '../../../../Types/Option';

export const ElementSetup: React.FC<{ id: string }> = ({ id }) => {
  const { updateElement, findElement } = useIndividualWidgetContext();

  const element = { ...findElement(id) };

  const handleSliderSetup = (
    range: (number | undefined)[],
    step: number | undefined
  ) => {
    const [min, max] = range;
    element.min = min;
    element.max = max;
    element.step = step;
    updateElement(id, element);
  };

  const handleListSetup = (option: Option) => {
    if (element.list) {
      const updatedOptionList = element.list.map((el) => {
        if (el.id === option.id) {
          return { ...option };
        } else {
          return el;
        }
      });
      element.list = [...updatedOptionList];
      updateElement(id, element);
    }
  };

  const updateElementDescription = (value: string) => {
    element.elementDescription = value;
    updateElement(id, element);
  };

  const addListOption = () => {
    if (element.list) {
      const option = {
        id: nanoid(),
        label: '',
        value: undefined,
        offValue: null,
        selected: false,
      };
      element.list.push({ ...option });
      updateElement(id, element);
    }
  };

  const removeListOption = (optionId: Option['id']) => {
    if (element.list) {
      element.list = element.list.filter((el: Option) => el.id !== optionId);
      updateElement(id, element);
    }
  };

  // Maria: this is a component, take it out to refactor
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
      const list = element.list?.map((option: Option) => {
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
          <button id="add-item" onClick={addListOption}>
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
};
