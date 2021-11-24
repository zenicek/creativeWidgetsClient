import './Results.sidebar.css';
import { useIndividualWidgetContext } from '../../../../Utils/Contexts';
import { hasValidFormula, genErrorMessage } from '../../../../Utils/Helpers';
import { useState, useEffect } from 'react';
import { InputToggle } from '../ElementSetup/ElementSetupOptions/Input.toggle';

export function ResultsSiderbar() {
  const { updateFormula, widget, updateResultDesc, updateResultValueDesc } =
    useIndividualWidgetContext();

  const [isValid, setIsValid] = useState(hasValidFormula(widget));

  useEffect(() => {
    setIsValid(hasValidFormula(widget));
  }, [widget]);

  //TODO formula to the results array since users should be able to display multiple results - after the mvp presentation
  const handleFormula = (formula: string) => {
    //TODO add validation for special characters for security
    updateFormula(formula.toUpperCase());
  };

  const RenderError = () => {
    if (isValid) return <></>;
    else return <p className="error">{genErrorMessage(widget)}</p>;
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
        {/* why is this a textarea instead of input?... */}
        <textarea
          className="input"
          // need validation but "pattern" does not exist on textarea
          // pattern="[\d][A-Za-z][()*-+/]*" //edit this later for validation
          rows={2}
          id="formula-input"
          value={widget.formula}
          onChange={(e) => handleFormula(e.target.value)}
        ></textarea>
        <RenderError />
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
