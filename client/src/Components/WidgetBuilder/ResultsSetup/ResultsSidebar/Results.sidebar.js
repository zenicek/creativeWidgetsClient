import './Results.sidebar.css';
import { useContext } from 'react';
import { IndividualWidget } from '../../../../Utils/Contexts';
import { validateFormula } from '../../../../Utils/Helpers';
import { useState, useEffect } from 'react';
import { InputToggle } from '../ElementSetup/ElementSetupOptions/Input.toggle';

export function ResultsSiderbar() {
  const { updateFormula, widget, updateResultDesc, updateResultValueDesc } =
    useContext(IndividualWidget);

  const [formulaError, setformulaError] = useState(validateFormula(widget));

  useEffect(() => {
    setformulaError(validateFormula(widget));
  }, [widget]);

  //TODO formula to the results array since users should be able to display multiple results - after the mvp presentation
  const handleFormula = formula => {
    //TODO add validation for special characters for security
    updateFormula(formula.toUpperCase());
  };
  return (
    <div className="side-bar-ctn">
      <div className="formula-wrapper-ctn">
        <InputToggle
          description={
            widget.resultDescription
              ? widget.resultDescription
              : 'Double tap to update'
          }
          updateWidget={updateResultDesc}
        />
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
        <InputToggle
          description={
            widget.resultValueDesc
              ? widget.resultValueDesc
              : 'Update value description'
          }
          updateWidget={updateResultValueDesc}
        />
      </div>
    </div>
  );
}
