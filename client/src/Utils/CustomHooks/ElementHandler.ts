import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useAppSelector } from '.';
import { actionCreators } from '../../States';
import { ElementTypes } from '../../Types/Element';

export const useCalcElementHandler = () => {
  const {
    updateElement,
    addElement,
    updateFormula,
    updateResultDesc,
    updateResultValueDesc,
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
  
  //The above specific version works, but its so long winded see if it can be changed to an easy one below with proper typeguards?
  // TODO: In this instance we can do type casting which will be safe since its typeguarded.
  const findElement = (id: string, type: ElementTypes) => {
    const element = calculator.elements.find(
      el => el._id === id || el.id === id
    );
    switch (type) {
      case ElementTypes.List: {
        return element as ListInterface
      }
    }
  };

  return {
    updateResultValueDesc,
    updateResultDesc,
    addElement,
    updateElement,
    updateFormula,
    findSliderElement,
    findValueInputElement,
    findTextElement,
    findListElement,
  };
};
