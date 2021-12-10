import { Parser } from 'expr-parser';

//function creates a next alphabetical identifier for elements

export function nextChar(char) {
  return String.fromCharCode(char.charCodeAt(0) + 1);
}

export function calculateResult(widget) {
  const parser = new Parser();
  const userExpression = parser.parse(widget.formula.toLowerCase());

  const inputValues = {};

  widget.elements.forEach(el => {
    inputValues[el.elementLetter.toLowerCase()] = Number(el.value);
  });

  let result;
  try {
    result = userExpression.evaluate(inputValues);
    return result;
  } catch (e) {
    return null;
  }
}

// validation function to define results screen (simple check if formula letter exists within the container)
export function hasValidFormula(widget) {
  const lettersInFormula = widget.formula.match(/([A-Z])+/g);
  if (!widget.formula || !lettersInFormula) {
    return true;
  }
  if (lettersInFormula.some(letter => letter.length !== 1)) {
    return false;
  }

  const lettersInWidget = widget.elements.map(el => el.elementLetter);
  for (const letter of lettersInFormula) {
    if (!lettersInWidget.includes(letter)) {
      return false;
    }
  }
  return true;
}

export function genErrorMessage(widget) {
  const lettersInFormula = widget.formula.match(/([A-Z])+/g);
  const lettersInWidget = widget.elements.map(el => el.elementLetter);
  const errorLetters = [];

  for (const letter of lettersInFormula) {
    if (!lettersInWidget.includes(letter)) errorLetters.push(letter);
  }

  return `Elements with letter "${[...errorLetters]}" don't exist`;
}
