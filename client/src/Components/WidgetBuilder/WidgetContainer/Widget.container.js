import { elements } from '../../InputElements/Elements.types';
import { useDrop } from 'react-dnd';
import './Widget.container.css';
import React from 'react';
import { useState } from 'react';

export function WidgetContainer(props) {
  const [elementsList, setElementsList] = useState([]);

  const [{ addedProps }, drop] = useDrop({
    accept: elements,
    drop: (item, monitor) => {
      console.log(item);
      setElementsList(oldState => {
        console.log(typeof oldState[0]);

        return [...oldState, React.createElement(item.renderEl)];
      });
    },
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
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
