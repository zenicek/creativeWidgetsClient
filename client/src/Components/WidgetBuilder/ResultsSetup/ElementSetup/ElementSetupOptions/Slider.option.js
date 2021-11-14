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
    <div>
      <div>FROM</div>
      <input
        type="tel"
        pattern="[0-9]*"
        value={range[0]}
        onChange={e => handleRangeInput({ from: e.target.value })}
      ></input>
      <div>TO</div>
      <input
        type="tel"
        pattern="[0-9]*"
        value={range[1]}
        onChange={e => handleRangeInput({ to: e.target.value })}
      ></input>
      <div>STEP</div>
      <input
        type="number"
        step="0.1"
        value={stepValue}
        min="0"
        onChange={e => handleRangeInput({ stepVal: e.target.value })}
      ></input>
    </div>
  );
}
