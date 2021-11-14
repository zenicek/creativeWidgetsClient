//function creates a next alphabetical number for elements
export function nextChar(char) {
  return String.fromCharCode(char.charCodeAt(0) + 1);
}

//function will replce all letters with values from relevant elements and then evaluates the expression and gets the result of the calculation - Due to time constrains I will use eval() and later on I will create a proper parser to make sure it handles everything correctly
export function calculateResult(widget) {
  console.log(widget);
  //TODO
}
