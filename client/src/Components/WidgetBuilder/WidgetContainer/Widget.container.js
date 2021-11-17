import { elementTypes } from '../../InputElements/Elements.types';
import { useDrop } from 'react-dnd';
import './Widget.container.css';
import { useCallback, useContext } from 'react';
import { IndividualWidget } from '../../../Utils/Contexts';
import { elements } from '../ElementsList/ElemsLookup';
import { ElementSetup } from '../ResultsSetup/ElementSetup/Element.setup';
import { Result } from '../ResultsBottom/Result';
import update from 'immutability-helper';

export function WidgetContainer({ loadResults }) {
  const { widget, addElement, arrangeElements } = useContext(IndividualWidget);
  //function gets all the elements from the context and converts to element lookup
  console.log(widget);
  const elementSetupList = [...widget.elements].map(el => (
    <ElementSetup id={el._id ? el._id : el.id} key={el._id ? el._id : el.id} />
  ));

  const moveElement = useCallback(
    (dragIndex, hoverIndex) => {
      const dragElement = widget.elements[dragIndex];
      arrangeElements(
        update(widget.elements, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragElement],
          ],
        })
      );
    },
    [widget.elements, arrangeElements]
  );

  const elementsList = [...widget.elements].map((el, index) => {
    const Element = elements[el.elementType];
    if (Element) {
      return (
        <Element
          id={el._id ? el._id : el.id}
          index={index}
          key={el._id ? el._id : el.id}
          moveElement={moveElement}
        />
      );
    }
    return null;
  });

  const [, drop] = useDrop({
    accept: elementTypes,
    drop: item => {
      console.log(item);
      if (item.meta) addElement(item.meta);
    },
  });
  return (
    <div
      className="widget-builder-main-ctn"
      style={{ width: `${widget.width}px` }}
    >
      <div ref={drop} className="widget-dnd-ctn">
        {!loadResults ? elementsList : elementSetupList}
      </div>
      {!loadResults && (
        <div className="results-ctn">
          <Result />
        </div>
      )}
    </div>
  );
}
