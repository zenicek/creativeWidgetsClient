import { Widget } from '../Types/Widget';
import { Element } from '../Types/Element';
import Parser from 'expr-eval';

//function creates a next alphabetical identifier for elements
export function nextChar(char: string) {
  return String.fromCharCode(char.charCodeAt(0) + 1);
}

//function will replace all letters with values from relevant elements and then evaluates the expression and gets the result of the calculation - Due to time constrains I will use eval() and later on I will create a proper parser to make sure it handles everything correctly
//TODO currently function will take and replace only first index.. but the element might be refered to multiple times in a formula.. this needs to be handled.

export function calculateResult(widget: Widget) {
  // let result = 0;
  // let formula = widget.formula.split(''); // string[]
  // if (formula.length === 0) return result;
  // if (validateFormula(widget) !== true)
  //   return 'Not a valid formula, please edit';
  // const letters = widget.formula.match(/([A-Z])/g);
  // letters.forEach((letter: any) => {
  //   let val: number;
  //   if (
  //     widget.elements.some((el: Element) => {
  //       if (el.elementLetter === letter) {
  //         val = el.value;
  //         return true;
  //       }
  //       return false;
  //     })
  //   ) {
  //     formula[formula.indexOf(letter)] = Number(val);
  //   }
  // });
  // //I KNOW I KNOW please dont judge, deadlines are tight
  // //TODO fixed float for now, but later users will be able to define decimal points
  // result = eval(formula.join('')).toFixed(2);
  // return result;
}

// validation function to define results screen (simple check if formula letter exists within the container)
//TODO what also needs to be handled is that if user by mistake puts "AA" for example it will accept that - user can only input "A" as the element.
export function validateFormula(widget: any) {
  const letters = widget.formula.match(/([A-Z])/g);
  if (!widget.formula || !letters) return true;
  let result;
  const errorLetters: any = [];
  if (letters && widget) {
    result = letters
      .map((letter: any) => {
        if (!widget.elements.some((el: any) => el.elementLetter === letter)) {
          errorLetters.push(letter);
          return false;
        } else return true;
      })
      .every((el: any) => el === true);
  }
  if (result) return result;
  return `Elements with letter "${[...errorLetters]}" don't exist`;
  //
}

//TODO this is the function to properly handle the formula expression
//function expressionParser(expression) {}
