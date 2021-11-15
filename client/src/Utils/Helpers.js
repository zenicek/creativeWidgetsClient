//function creates a next alphabetical number for elements
export function nextChar(char) {
  return String.fromCharCode(char.charCodeAt(0) + 1);
}

//function will replace all letters with values from relevant elements and then evaluates the expression and gets the result of the calculation - Due to time constrains I will use eval() and later on I will create a proper parser to make sure it handles everything correctly
export function calculateResult(widget) {
  const result = 0;
  let formula = widget.formula;
  if (formula.length === 0) return result;
  if (validateFormula(widget) !== true)
    return 'Not a valid formula, please edit';
  const letters = formula.match(/([A-Z])/g);
  const values = letters.map(letter => {
    let val = '';
    if (
      widget.elements.some(el => {
        if (el.elementLetter === letter) {
          val = el.value;
          return true;
        }
      })
    ) {
      return { elementLetter: letter, value: Number(val) };
    }
  });

  console.log(values);
  return result;
}

// TODO add the validation function to the define results screen (simple check if formula letter exists within the container) move that away from the calculate results

export function validateFormula(widget) {
  const letters = widget.formula.match(/([A-Z])/g);
  if (!widget.formula) return true;
  let result;
  const errorLetters = [];
  if (widget) {
    result = letters
      .map(letter => {
        if (!widget.elements.some(el => el.elementLetter === letter)) {
          errorLetters.push(letter);
          return false;
        } else return true;
      })
      .every(el => el === true);
  }
  if (result) return result;
  return `Elements with letter "${[...errorLetters]}" don't exist`;
  //
}
