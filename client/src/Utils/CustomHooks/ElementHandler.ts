import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useAppSelector } from '.';
import { actionCreators } from '../../States';

export const useCalcElementHandler = () => {
  const {
    updateElement,
    addElement,
    updateFormula,
    updateResultDesc,
    updateResultValueDesc,
    arrangeElements,
  } = bindActionCreators(actionCreators, useDispatch());

  const calculator = useAppSelector(state => state.calculator);

  const findSliderElement = (id: string) => {
    const element = calculator.elements.find(
      el => el._id === id || el.id === id
    );
    if (element && element.type === 'Slider') return element;
    throw new Error('The Slider element was promised to be always here!');
  };

  const findValueInputElement = (id: string) => {
    const element = calculator.elements.find(
      el => el._id === id || el.id === id
    );
    if (element && element.type === 'ValueInput') return element;
    throw new Error('The Value Input element was promised to be always here!');
  };

  const findTextElement = (id: string) => {
    const element = calculator.elements.find(
      el => el._id === id || el.id === id
    );
    if (element && element.type === 'Text') return element;
    throw new Error('The Text element was promised to be always here!');
  };

  const findListElement = (id: string) => {
    const element = calculator.elements.find(
      el => el._id === id || el.id === id
    );
    if (element && element.type === 'List') return element;
    throw new Error('The List element was promised to be always here!');
  };

  // The below is in case I am not sure which element I want to find, needs to typeguard where I am using it.
  const findElement = (id: string) => {
    const element = calculator.elements.find(
      el => el._id === id || el.id === id
    );
    if (element) return element;
    throw new Error('The element was promised to be always here!');
  };

  return {
    updateResultValueDesc,
    updateResultDesc,
    addElement,
    arrangeElements,
    updateElement,
    updateFormula,
    findSliderElement,
    findValueInputElement,
    findTextElement,
    findListElement,
    findElement,
  };
};
