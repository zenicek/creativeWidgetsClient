import './List.item.css';
import { InputMetas } from '../../../../States';
import { useDraggable } from '@dnd-kit/core';

interface ItemProps {
  icon: string;
  text: string;
  elementName: string;
}

export const ListItem: React.FC<ItemProps> = ({ icon, text, elementName }) => {
  const { setNodeRef, isDragging, listeners, attributes } = useDraggable({
    id: elementName,
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
