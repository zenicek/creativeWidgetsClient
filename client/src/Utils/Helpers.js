//function creates a next alphabetical number for elements
export function nextChar(char) {
  return String.fromCharCode(char.charCodeAt(0) + 1);
}

//function will replace all letters with values from relevant elements and then evaluates the expression and gets the result of the calculation - Due to time constrains I will use eval() and later on I will create a proper parser to make sure it handles everything correctly
export function calculateResult(widget) {
  const result = 0;
  const letters = widget.formula.match(/([A-Z])/g);
  const values = widget.elements.map(el => {
    if (letters && letters.includes(el.elementLetter)) {
      return { elementLetter: el.elementLetter, value: Number(el.value) };
    }
  });
  console.log(values);
  return result;
  //TODO
}
