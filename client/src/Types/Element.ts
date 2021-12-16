import Option from './Option';

interface Element {
  id?: string;
  _id?: string;
  type: string;
  letter: string;
  description: string;
}

export interface SliderInterface extends Element {
  __kind: 'Slider';
  value: number | string;
  min: number;
  max: number;
  step: number;
}

export interface ListInterface extends Element {
  __kind: 'List';
  list: Option[];
  value: number | string;
}

export interface ValueInputInterface extends Element {
  __kind: 'ValueInput';
  value: number | string;
}

export interface TextInterface extends Element {
  __kind: 'Text';
  value: '';
}

export type Kind = 'Text' | 'List' | 'ValueInput' | 'Slider';

export type Elements =
  | SliderInterface
  | ListInterface
  | ValueInputInterface
  | TextInterface;
