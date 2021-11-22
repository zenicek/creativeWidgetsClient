import { Element } from './Element';
import { Result } from './Result';
export interface Widget {
  _id: string;
  name: string;
  formula: string;
  width: number;
  lastLetter: string;
  resultDescription: string;
  resultValueDesc: string;
  result: Result[]; //this will be used later when added new feature to have more results
  elements: Element[];
}
