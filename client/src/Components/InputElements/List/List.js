import { useContext, useState } from 'react';
import { IndividualWidget } from '../../../Utils/Contexts';
import './List.css';
import Select from 'react-select';

export function List({ id }) {
  const { findElement, updateElement } = useContext(IndividualWidget);
  const element = { ...findElement(id) };
  const [selectedOption, setSelectedOption] = useState(element.value);

  const handleChange = e => {
    element.value = e.value;
    setSelectedOption(e.value);
    updateElement(id, element);
  };

  return (
    <div className="input-ctn">
      <label htmlFor="widget-list">{element.elementDescription}</label>
      <div>
        <Select
          options={element.list}
          onChange={e => handleChange(e)}
          value={element.list.filter(option => option.value === selectedOption)}
        />
      </div>
    </div>
  );
}
