import { Elements } from './Element';
import { Calculator } from './Widget';

export interface IndividualWidgetInterface {
  widget: Calculator;
  setWidget: React.Dispatch<React.SetStateAction<Calculator>>;
  addElement: (meta: Elements) => void;
  updateElement: (id: string, element: any) => void;
  arrangeElements: (elements: Elements[]) => void;
  findElement: (id: string) => Elements | undefined;
  updateFormula: (formula: string) => void;
  updateResultDesc: (resultDesc: string) => void;
  updateResultValueDesc: (resultValueDesc: string) => void;
}
