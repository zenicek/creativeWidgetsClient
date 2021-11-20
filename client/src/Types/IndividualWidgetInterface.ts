import { Element } from './Element';
import { MetaData } from './MetaData';
import { Widget } from './Widget';

export interface IndividualWidgetInterface {
  widget: Widget;
  setWidget: React.Dispatch<React.SetStateAction<Widget>>;
  addElement: (meta: MetaData) => void;
  updateElement: (id: string, element: Element) => void;
  arrangeElement: (elements: Element[]) => void;
  findElement: (id: string) => Element;
  updateFormula: (formula: string) => void;
  updateResultDesc: (resultDesc: string) => void;
  updateResultValueDesc: (resultValueDesc: string) => void;
}
