import { Calculator } from '../Types/Widget';
import { Parser } from 'expr-eval';

//function creates a next alphabetical identifier for elements
export function nextChar(char: string): string {
  return String.fromCharCode(char.charCodeAt(0) + 1);
}

// calculate result from user's formula
interface InputValues {
  [key: string]: number;
}

export function calculateResult(widget: Calculator): number | null {
  const parser = new Parser();
  const userExpression = parser.parse(widget.formula.toLowerCase());
  const inputValues: InputValues = {};

  widget.elements.forEach(el => {
    inputValues[el.letter.toLowerCase()] = Number(el.value);
  });

  let result: number;
  try {
    result = userExpression.evaluate(inputValues);
    return result;
  } catch (e) {
    return null;
  }
}

// validation function to define results screen (simple check if formula letter exists within the container)
export function hasValidFormula(widget: Calculator): boolean {
  const lettersInFormula = widget.formula.match(/([A-Z])+/g);
  if (!widget.formula || !lettersInFormula) {
    return true;
  }
  if (lettersInFormula.some((letter: string) => letter.length !== 1)) {
    return false;
  }

  const lettersInWidget = widget.elements.map(el => el.letter);
  for (const letter of lettersInFormula) {
    if (!lettersInWidget.includes(letter)) {
      return false;
    }
  }
  return true;
}

export function genErrorMessage(widget: Calculator): string {
  const lettersInFormula = widget.formula.match(/([A-Z])+/g);
  const lettersInWidget = widget.elements.map(el => el.letter);
  const errorLetters: string[] = [];

  for (const letter of lettersInFormula!) {
    if (!lettersInWidget.includes(letter)) errorLetters.push(letter);
  }

  return `Elements with letter "${[...errorLetters]}" don't exist`;
}
