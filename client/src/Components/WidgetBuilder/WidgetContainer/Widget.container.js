import { elementTypes } from '../../InputElements/Elements.types';
import { useDrop } from 'react-dnd';
import './Widget.container.css';
import { useContext } from 'react';
import { IndividualWidget } from '../../../Utils/Contexts';
import { elements } from '../ElementsList/ElemsLookup';
import { ElementSetup } from '../ResultsSetup/ElementSetup/Element.setup';

export function WidgetContainer({ loadResults }) {
  const { widget, addElement } = useContext(IndividualWidget);
  //function gets all the elements from the context, sorts them by relative position and converts to element lookup

  const elementSetupList = [...widget.elements].map(el => (
    <ElementSetup id={el._id ? el._id : el.id} key={el._id ? el._id : el.id} />
  ));

  const elementsList = [...widget.elements]
    .sort((a, b) => a.elementIndex - b.elementIndex)
    .map(el => {
      const Element = elements[el.elementType];
      if (Element) {
        return (
          <Element id={el._id ? el._id : el.id} key={el._id ? el._id : el.id} />
        );
      }
      return null;
    });

  const [, drop] = useDrop({
    accept: elementTypes,
    drop: item => {
      addElement(item.meta);
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
        {!loadResults ? elementsList : elementSetupList}
      </div>
      <div className="results-ctn">HERE ARE RESULTS</div>
    </div>
  );
}
