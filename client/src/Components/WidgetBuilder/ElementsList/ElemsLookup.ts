import { ValueInput } from '../../InputElements/Value/Value';
import { Slider } from '../../InputElements/Slider/Slider';
import { List } from '../../InputElements/List/List';
import { Text } from '../../InputElements/Text/Text';
import React from 'react';
import InputProps from '../../../Types/InputProps';

interface Lookup {
  [key: string]: React.FC<InputProps>;
}
export const elements: Lookup = {
  ValueInput: ValueInput,
  Slider: Slider,
  List: List,
  Text: Text,
};
