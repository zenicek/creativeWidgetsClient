import { useContext } from 'react';
import { IndividualWidget } from '../../../Utils/Contexts';
import './List.css';

export function List({ id }) {
  const { findElement } = useContext(IndividualWidget);

  const element = { ...findElement(id) };

  const options = () => {
    if (element.list && element.list.length > 0) {
      return element.list.map(item => {
        return <option value={item.onValue}>item.optionName</option>;
      });
    } else {
      return <option value="no-data">Set up your first option</option>;
    }
  };
  return (
    <div className="input-ctn">
      <label htmlFor="widget-list">List</label>
      <div>
        <select className="input" id="widget-list">
          {options()}
        </select>
      </div>
    </div>
  );
}
