import { elementTypes } from '../../InputElements/Elements.types';
import { useDrop } from 'react-dnd';
import './Widget.container.css';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { IndividualWidget } from '../../../Utils/Contexts';
import elems from '../ElementsList/Icons/Icons';

export function WidgetContainer() {
  const { widget } = useContext(IndividualWidget);
  const [elementsList, setElementsList] = useState([]);

  //function gets all the elements from the context, sorts them by relative position and converts to element lookup
  const getElements = () => {
    const res = [];
    widget.elements
      .sort((a, b) => a.elementIndex - b.elementIndex)
      .forEach(el => {
        elems.forEach(e => {
          if (el.elementType === e.elementName)
            res.push(<e.element {...el} key={el._id} />);
        });
      });
    return res;
  };

  useEffect(() => {
    setElementsList([...getElements()]);
  }, [widget]);

  const [, drop] = useDrop({
    accept: elementTypes,
    drop: item => {
      setElementsList(oldState => {
        return [
          ...oldState,
          <item.renderEl
            index={elementsList.length}
            key={elementsList.length}
          />,
        ];
      });
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
