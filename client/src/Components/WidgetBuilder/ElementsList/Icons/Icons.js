import list from './SvgIcons/list-icon.svg';
import slider from './SvgIcons/slider-icon.svg';
import value from './SvgIcons/value-icon.svg';
import text from './SvgIcons/text-icon.svg';
import checkbox from './SvgIcons/checkbox-icon.svg';
import radio from './SvgIcons/radio-icon.svg';
import button from './SvgIcons/button-icon.svg';
import image from './SvgIcons/image-icon.svg';
import { ValueInput } from '../../../InputElements/Value/Value';
import { Slider } from '../../../InputElements/Slider/Slider';
//import calculation from './SvgIcons/calculation-icon.svg';

const elems = [
  {
    icon: value,
    text: 'Value field',
    element: ValueInput,
    elementName: 'ValueInput',
  },
  {
    icon: list,
    text: 'List',
    elementName: 'List',
    element: ValueInput,
  },
  {
    icon: text,
    text: 'Text',
    elementName: 'Text',
    element: ValueInput,
  },
  {
    icon: slider,
    text: 'Slider',
    elementName: 'Slider',
    element: Slider,
  },
  {
    icon: checkbox,
    text: 'Checkbox',
    elementName: 'Checkbox',
    element: ValueInput,
  },
  {
    icon: radio,
    text: 'Radio selector',
    elementName: 'Radio',
    element: ValueInput,
  },
  {
    icon: button,
    text: 'Button',
    elementName: 'Button',
    element: ValueInput,
  },
  {
    icon: image,
    text: 'Image',
    elementName: 'Image',
    element: ValueInput,
  },
];

export default elems;
