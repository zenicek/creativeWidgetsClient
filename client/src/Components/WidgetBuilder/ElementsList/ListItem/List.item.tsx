import './List.item.css';
import { useDrag } from 'react-dnd';
import { InputMetas } from '../../../../States';
import { useDraggable } from '@dnd-kit/core';

interface ItemProps {
  icon: string;
  text: string;
  elementName: string;
}

export const ListItem: React.FC<ItemProps> = ({ icon, text, elementName }) => {
  // const [{ isDragging }, drag] = useDrag(() => ({
  //   type: elementName,
  //   item: {
  //     meta: InputMetas[elementName],
  //   },
  //   collect: monitor => ({
  //     isDragging: !!monitor.isDragging(),
  //   }),
  // }));

  const { setNodeRef, isDragging, listeners, attributes } = useDraggable({
    id: 'draggable',
    data: { type: elementName },
  });
  return (
    <div
      ref={setNodeRef}
      style={{ opacity: isDragging ? 0.5 : 1 }}
      {...listeners}
      {...attributes}
    >
      <img src={icon} alt={text} className="icon-img" />
      <span className="option-text">{text}</span>
    </div>
  );
};
