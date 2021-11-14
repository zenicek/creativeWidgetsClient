import './Results.sidebar.css';
import { useContext } from 'react';
import { IndividualWidget } from '../../../../Utils/Contexts';

export function ResultsSiderbar() {
  const { updateFormula, widget } = useContext(IndividualWidget);
  const handleFormula = formula => {
    //TODO add validation for special characters for security
    updateFormula(formula.toUpperCase());
  };
  return (
    <div className="side-bar-ctn">
      <div className="formula-wrapper-ctn">
        <p>Results description, double click to edit</p>
        {'='}
        <textarea
          type="text"
          className="input"
          rows="2"
          id="formula-input"
          value={widget.formula}
          onChange={e => handleFormula(e.target.value)}
        ></textarea>
        <p>USD</p>
      </div>
    </div>
  );
}
