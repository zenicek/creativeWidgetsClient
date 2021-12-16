import './Element.setup.css';
import { useIndividualWidgetContext } from '../../../../Utils/Contexts';
import { SliderOptions } from './ElementSetupOptions/Slider.option';
import { ListItemSetup } from './ElementSetupOptions/List.option';
import { InputToggle } from './ElementSetupOptions/Input.toggle';
import { nanoid } from 'nanoid';
import Option from '../../../../Types/Option';
import { Elements } from '../../../../Types/Element';

export const ElementSetup: React.FC<{ id: string }> = ({ id }) => {
  const { updateElement, findElement } = useIndividualWidgetContext();

  const findValueElement = (element: Elements | undefined) => {
    if (
      (element && element.__kind === 'Slider') ||
      (element && element.__kind === 'List')
    ) {
      return element;
    }
    throw new Error('The value input was promised to be always here!');
  };
  const element = { ...findValueElement(findElement(id)) };

  const handleSliderSetup = (range: number[], step: number) => {
    if (element.__kind === 'Slider') {
      const [min, max] = range;
      element.min = min;
      element.max = max;
      element.step = step;
      updateElement(id, element);
    }
  };

  const handleListSetup = (option: Option) => {
    if (element.__kind === 'List' && element.list) {
      const updatedOptionList = element.list.map(el => {
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
    element.description = value;
    updateElement(id, element);
  };

  const addListOption = () => {
    if (element.__kind === 'List' && element.list) {
      const option = {
        id: nanoid(),
        label: '',
        value: '',
        offValue: null,
        selected: false,
      };
      element.list.push({ ...option });
      updateElement(id, element);
    }
  };

  const removeListOption = (optionId: Option['id']) => {
    if (element.__kind === 'List' && element.list) {
      element.list = element.list.filter((el: Option) => el.id !== optionId);
      updateElement(id, element);
    }
  };

  // Maria: this is a component, take it out to refactor
  const optionElement = () => {
    if (element.type === 'Slider' && element.__kind === 'Slider') {
      return (
        <SliderOptions
          min={element.min}
          max={element.max}
          step={element.step}
          handleSliderSetup={handleSliderSetup}
        />
      );
    }
    if (element.type === 'List' && element.__kind === 'List') {
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
        {element.letter !== 'false' ? element.letter : ''}
      </div>
      <div className="description-ctn">
        {' '}
        <InputToggle
          description={element.description}
          updateWidget={updateElementDescription}
        />
      </div>
      {optionElement()}
    </div>
  );
};
