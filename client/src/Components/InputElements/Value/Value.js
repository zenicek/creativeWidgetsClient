import './Value.css';

export function ValueInput() {
  return (
    <div className="input-ctn">
      <label className="label" htmlFor="widget-input">
        Input
      </label>
      <div>
        <input type="number" id="widget-input" placeholder="Number"></input>
      </div>
    </div>
  );
}
