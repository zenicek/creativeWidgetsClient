import './Result.css';
import { useState } from 'react';

export function Result({ resultDescription, resultValDesc }) {
  const [resultValue, setResultValue] = useState(0);

  //TODO update once you have a calculation parser created
  return (
    <div className="result-ctn">
      <p id="result-desc">Placeholder for description{resultDescription}</p>
      <p id="result-display">
        {resultValue} USD{resultValDesc}
      </p>
    </div>
  );
}
