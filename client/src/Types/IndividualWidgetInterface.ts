import { Element } from './Element';
import { MetaData } from './MetaData';
import { Widget } from './Widget';

export interface IndividualWidgetInterface {
  widget: Widget;
  setWidget: React.Dispatch<React.SetStateAction<Widget>>;
  addElement: (meta: MetaData) => void;
  updateElement: (id: string, element: any) => void;
  arrangeElements: (elements: Element[]) => void;
  findElement: (id: string) => Element | undefined;
  updateFormula: (formula: string) => void;
  updateResultDesc: (resultDesc: string) => void;
  updateResultValueDesc: (resultValueDesc: string) => void;
}
