import './Element.setup.css';
import { useContext } from 'react';
import { IndividualWidget } from '../../../../Utils/Contexts';

export function ElementSetup({ id }) {
  const { widget, updateElement, findElement } = useContext(IndividualWidget);

  const element = findElement(id);

  return (
    <div className="element-setup-ctn">
      <div id="letter-ctn">{element.elementLetter}</div>
      <div>{element.elementDescription}</div>
    </div>
  );
}
