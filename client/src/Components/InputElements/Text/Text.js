import './Text.css';
import { useContext } from 'react';
import { IndividualWidget } from '../../../Utils/Contexts';

export function Text({ id }) {
  const { findElement } = useContext(IndividualWidget);

  const element = { ...findElement(id) };
  return <h3>{element.elementDescription}</h3>;
}
