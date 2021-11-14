import './Result.css';
import { useState } from 'react';
import { calculateResult } from '../../../Utils/Helpers';
import { useContext } from 'react';
import { IndividualWidget } from '../../../Utils/Contexts';

export function Result({ resultDescription, resultValDesc }) {
  const { widget } = useContext(IndividualWidget);
  const result = calculateResult(widget);

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
