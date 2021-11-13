import { useContext } from 'react';
import './List.css';

export function List({ id }) {
  return (
    <div className="input-ctn">
      <label htmlFor="widget-list">List</label>
      <div>
        <input list="datalist" className="input" id="widget-list"></input>
        <datalist id="datalist">
          <option value="TODO CHANGE THIS TO REAL ARRAY"></option>
        </datalist>
      </div>
    </div>
  );
}
