import { Element, Elements } from './Element';
import { Result } from './Result';
export interface Calculator {
  _id?: string;
  name: string;
  formula: string;
  width: number;
  lastLetter: string;
  resultDescription: string;
  resultValueDesc: string;
  results: Result[]; //this will be used later when added new feature to have more results
  elements: Elements[];
}
