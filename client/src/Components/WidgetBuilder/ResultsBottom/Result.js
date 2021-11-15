import './Result.css';
import { calculateResult } from '../../../Utils/Helpers';
import { useContext } from 'react';
import { IndividualWidget } from '../../../Utils/Contexts';

export function Result({ resultDescription, resultValDesc }) {
  const { widget } = useContext(IndividualWidget);

  const getResults = () => {
    try {
      return calculateResult(widget);
    } catch (e) {
      //log for now but make sure validation is solid once parser is done
      return console.log(e);
    }
  };
  const result = getResults();

  //TODO update once you have a calculation parser created
  return (
    <div className="result-ctn">
      <p id="result-desc">Placeholder for description{resultDescription}</p>
      <p id="result-display">
        {result} USD{resultValDesc}
      </p>
    </div>
  );
}
