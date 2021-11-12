import { elements } from '../../InputElements/Elements.types';
import { useDrop } from 'react-dnd';
import './Widget.container.css';
import { useEffect, useState } from 'react';

export function WidgetContainer(elems) {
  const [elementsList, setElementsList] = useState([]);

  const getElements = elsArr => {
    console.log(elems);
  };

  useEffect(() => {
    getElements();
  }, [elems]);

  const [, drop] = useDrop({
    accept: elements,
    drop: item => {
      setElementsList(oldState => {
        return [...oldState, <item.renderEl key={elementsList.length + 1} />];
      });
    },
    // collect: monitor => ({
    //   canDrop: !!monitor.canDrop(),
    // }),
  });
  return (
    <div className="widget-builder-main-ctn">
      <div ref={drop} className="widget-dnd-ctn">
        {elementsList}
      </div>
      <div className="results-ctn">HERE ARE RESULTS</div>
    </div>
  );
}
