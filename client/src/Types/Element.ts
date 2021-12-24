import Option from './Option';

interface Element {
  id?: string;
  _id?: string;
  letter: string;
  description: string;
}

export interface SliderInterface extends Element {
  type: 'Slider';
  value: number | string;
  min: number;
  max: number;
  step: number;
}

export interface ListInterface extends Element {
  type: 'List';
  list: Option[];
  value: number | string;
}

export interface ValueInputInterface extends Element {
  type: 'ValueInput';
  value: number | string;
}

export interface TextInterface extends Element {
  type: 'Text';
  value: '';
}

export enum ElementTypes {
  Text = 'Text',
  List = 'List',
  ValueInput = 'ValueInput',
  Slider = 'Slider',
}

export type Elements =
  | SliderInterface
  | ListInterface
  | ValueInputInterface
  | TextInterface;
