import './Result.css';
import { calculateResult } from '../../../Utils/Helpers';
import { useAppSelector } from '../../../Utils/CustomHooks/';

export const Result: React.FC = () => {
  const widget = useAppSelector(state => state.calculator);
  const getResults = () => {
    try {
      if (widget.formula.length > 1) return calculateResult(widget);
    } catch (e) {
      //log for now but make sure validation is solid once parser is done
      return console.log(e);
    }
  };
  const result = getResults();

  //TODO update once you have a calculation parser created
  return (
    <div className="result-ctn">
      <p id="result-desc">{widget.resultDescription}</p>
      <p id="result-display">
        {result} {widget.resultValueDesc}
      </p>
    </div>
  );
};
