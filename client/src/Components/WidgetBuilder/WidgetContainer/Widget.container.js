import { elementTypes } from '../../InputElements/Elements.types';
import { useDrop } from 'react-dnd';
import './Widget.container.css';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { IndividualWidget } from '../../../Utils/Contexts';
import { elements } from '../ElementsList/ElemsLookup';

export function WidgetContainer() {
  const { widget, setWidget } = useContext(IndividualWidget);
  //function gets all the elements from the context, sorts them by relative position and converts to element lookup
  const elementsList = [...widget.elements]
    .sort((a, b) => a.elementIndex - b.elementIndex)
    .map((el, index) => {
      const Element = elements[el.elementType];
      if (Element)
        return (
          <Element {...el} elementIndex={index} key={el._id ? el._id : index} />
        );
      return null;
    });

  const [, drop] = useDrop({
    accept: elementTypes,
    drop: item => {
      setWidget({ ...widget, elements: [...widget.elements, item.meta] });
      console.log(item);
      //console.log('widget from drop', widget);
    },
    // collect: monitor => ({
    //   canDrop: !!monitor.canDrop(),
    // }),
  });
  return (
    <div
      className="widget-builder-main-ctn"
      style={{ width: `${widget.width}px` }}
    >
      <div ref={drop} className="widget-dnd-ctn">
        {elementsList}
      </div>
      <div className="results-ctn">HERE ARE RESULTS</div>
    </div>
  );
}
