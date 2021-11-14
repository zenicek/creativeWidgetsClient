import './Results.sidebar.css';
import { useContext } from 'react';
import { IndividualWidget } from '../../../../Utils/Contexts';

export function ResultsSiderbar() {
  const { updateFormula, widget } = useContext(IndividualWidget);
  console.log(widget);

  const handleFormula = formula => {
    //TODO add validation for special characters for security
    updateFormula(formula);
  };
  return (
    <div className="side-bar-ctn">
      <div className="formula-wrapper-ctn">
        <label htmlFor="formula-input">Results description edit here</label>
        {'='}
        <input
          type="text"
          className="input"
          id="formula-input"
          value={widget.formula}
          onChange={e => handleFormula(e.target.value)}
        ></input>
      </div>
    </div>
  );
}
