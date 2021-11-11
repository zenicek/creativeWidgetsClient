import { elements } from '../../InputElements/Elements.types';
import { useDrop, DragPreviewImage } from 'react-dnd';
import './Widget.container.css';
import React from 'react';
import { useState } from 'react';

export function WidgetContainer(props) {
  const [elementsList, setElementsList] = useState([]);

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
