import { RefObject } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { ElementArranger } from '../../Components/InputElements/Elements.types';

//this is a custom hook logic to rearrange elements in the container
//TODO refactor this possibly for nice effects etc.. and be able to drop next to the existing element and shrink it to half
export function useArrangeElement(
  ref: RefObject<HTMLElement>,
  id: string,
  index: number,
  moveElement: (dragIndex: number, hoverIndex: number) => null
) {
  const [{ handlerId }, drop] = useDrop({
    accept: ElementArranger,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    // ANY HERE! NO IDEA HOW TO IMPLEMENT REACT-DND TYPES!!!
    hover(item: any, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      // Get pixels to the top
      // ! HERENO IDEA HOW TO IMPLEMENT REACT-DND TYPES!!!
      const hoverClientY = clientOffset!.y - hoverBoundingRect.top;
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      // Time to actually perform the action
      moveElement(dragIndex, hoverIndex);
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    },
  });
  const [{ isDragging }, drag] = useDrag({
    type: 'ElementArranger',
    item: () => {
      return { id, index };
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return { drag, drop, isDragging, handlerId };
}
