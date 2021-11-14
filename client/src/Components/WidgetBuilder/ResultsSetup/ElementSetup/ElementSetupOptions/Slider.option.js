import './Slider.option.css';

export function SliderOptions({ handleSliderSetup, min, max, step }) {
  const range = [min, max];
  let stepValue = step;

  const handleRangeInput = ({ from, to, stepVal }) => {
    if (from !== undefined) range[0] = Number(from);
    if (to !== undefined) range[1] = Number(to);
    if (stepVal !== undefined) stepValue = Number(stepVal);
    handleSliderSetup(range, stepValue);
  };
  return (
    <div className="slider-settings-ctn">
      <div className="settings-desc-ctn">FROM</div>
      <input
        className="settings-input"
        type="num"
        pattern="[0-9]*"
        value={range[0]}
        onChange={e => handleRangeInput({ from: e.target.value })}
      ></input>
      <div className="settings-desc-ctn">TO</div>
      <input
        className="settings-input"
        type="num"
        pattern="[0-9]*"
        value={range[1]}
        onChange={e => handleRangeInput({ to: e.target.value })}
      ></input>
      <div className="settings-desc-ctn">STEP</div>
      <input
        className="settings-input"
        type="number"
        step="0.1"
        value={stepValue}
        min="0"
        onChange={e => handleRangeInput({ stepVal: e.target.value })}
      ></input>
    </div>
  );
}
