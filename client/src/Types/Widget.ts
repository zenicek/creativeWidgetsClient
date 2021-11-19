import { Element } from './Element';
export interface Widget {
  name: string;
  formula: string;
  width: number;
  lastLetter: string;
  resultDescription: string;
  resultValueDesc: string;
  result: [{ formula: string; description: string; valueDesc: string }]; //this will be used later when added new feature to have more results
  elements: Element[];
}
