import { useCallback } from 'react';
import './Widget.container.css';
import update from 'immutability-helper';
import { elementTypes } from '../../InputElements/Elements.types';
import { elements } from '../ElementsList/ElemsLookup';
import { ElementSetup } from '../ResultsSetup/ElementSetup/Element.setup';
import { Result } from '../ResultsBottom/Result';
import {
  useAppSelector,
  useCalcElementHandler,
} from '../../../Utils/CustomHooks/';
import { useDroppable } from '@dnd-kit/core';

export const WidgetContainer: React.FC<{ loadResults: boolean }> = ({
  loadResults,
}) => {
  const widget = useAppSelector(state => state.calculator);
  const { arrangeElements } = useCalcElementHandler();
  //function gets all the elements from the context and converts to element lookup
  const elementSetupList = [...widget.elements].map(el => {
    if (el.id) {
      return (
        <ElementSetup
          id={el._id ? el._id : el.id}
          key={el._id ? el._id : el.id}
        />
      );
    }
  });

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
      return null;
    },
    [widget.elements, arrangeElements]
  );

  const elementsList = [...widget.elements].map((el, index) => {
    const Element = elements[el.type];
    if (Element && el.id) {
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

  // const [, drop] = useDrop({
  //   accept: elementTypes,
  //   drop: (item: { meta: Elements }) => {
  //     if (item.meta) addElement(item.meta);
  //   },
  // });

  const { setNodeRef } = useDroppable({
    id: 'droppable-ctn',
    data: { accepts: elementTypes },
  });
  return (
    <div
      className="widget-builder-main-ctn"
      style={{ width: `${widget.width}px` }}
    >
      <div ref={setNodeRef} className="widget-dnd-ctn">
        {!loadResults ? elementsList : elementSetupList}
      </div>

      {!loadResults && (
        <div className="results-ctn">
          <Result />
        </div>
      )}
    </div>
  );
};
