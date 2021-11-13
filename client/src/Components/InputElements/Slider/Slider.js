import './Slider.css';
import { useEffect, useState, useContext } from 'react';
import { IndividualWidget } from '../../../Utils/Contexts';

export function Slider(props) {
  const { widget, setWidget } = useContext(IndividualWidget);
  //initial metadata
  const initialMeta = {
    elementType: 'Slider',
    elmentIndex: props.index,
    elementLetter: 'A',
    elementDescription: 'Slider',
    value: 0,
    min: 0,
    max: 10,
    step: 1,
  };
  const [metas, setMeta] = useState(initialMeta);

  const updateWidgetState = () => {};

  useEffect(() => {
    if (props._id) {
      setMeta({ ...props });
    }
  }, [props]);

  const marks = () => {
    const options = [];
    for (let i = 0; i <= metas.max; i++) {
      options.push(<option key={i} value={i} label={i % 2 ? '' : i}></option>);
    }
    return options;
  };
  return (
    <div className="slider-ctn">
      <label>
        {metas.elementDescription} - {metas.value}
      </label>
      <div>
        <input
          type="range"
          id="slider"
          min={metas.min}
          max={metas.max}
          step={metas.step}
          value={metas.value}
          onChange={e => setMeta({ ...metas, value: e.target.value })}
          list="tickmarks"
        ></input>
        <datalist id="tickmarks">{marks()}</datalist>
      </div>
    </div>
  );
}
