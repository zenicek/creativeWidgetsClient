import { Elements } from './Element';
import { MetaData } from './MetaData';
import { Calculator } from './Widget';

export interface IndividualWidgetInterface {
  widget: Calculator;
  setWidget: React.Dispatch<React.SetStateAction<Calculator>>;
  addElement: (meta: MetaData) => void;
  updateElement: (id: string, element: any) => void;
  arrangeElements: (elements: Element[]) => void;
  findElement: (id: string) => Elements;
  updateFormula: (formula: string) => void;
  updateResultDesc: (resultDesc: string) => void;
  updateResultValueDesc: (resultValueDesc: string) => void;
}
