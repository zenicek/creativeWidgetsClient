import './Results.sidebar.css';
import { useContext } from 'react';
import { IndividualWidget } from '../../../../Utils/Contexts';
import { validateFormula } from '../../../../Utils/Helpers';
import { useState, useEffect } from 'react';

export function ResultsSiderbar() {
  const { updateFormula, widget, updateResultDesc } =
    useContext(IndividualWidget);

  const [formulaError, setformulaError] = useState(validateFormula(widget));

  useEffect(() => {
    setformulaError(validateFormula(widget));
  }, [widget]);

  //TODO formula to the results array since users should be able to display multiple results
  const results = {
    formula: '',
    description: 'Results description, double click to edit',
    valueDesc: 'USD',
  };

  const handleResDescription = e => {
    results.description = e.target.value;
    updateResultDesc(results);
  };
  const handleResValueDesc = e => {
    results.valueDesc = e.target.value;
    updateResultDesc(results);
  };
  const handleFormula = formula => {
    //TODO add validation for special characters for security
    updateFormula(formula.toUpperCase());
  };
  return (
    <div className="side-bar-ctn">
      <div className="formula-wrapper-ctn">
        <p>{results.description}</p>
        {'='}
        <textarea
          type="text"
          className="input"
          pattern="[\d][A-Za-z][()*-+/]*" //edit this later for validation
          rows="2"
          id="formula-input"
          value={widget.formula}
          onChange={e => handleFormula(e.target.value)}
        ></textarea>
        <p className="error">{formulaError}</p>
        <p>{results.valueDesc}</p>
      </div>
    </div>
  );
}
