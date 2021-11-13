import './List.item.css';
import { useDrag } from 'react-dnd';
import { InputMetas } from '../../../../Utils/Contexts';

export function ListItem({ icon, text, elementName, renderEl }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: elementName,
    item: {
      meta: InputMetas[elementName],
      renderEl: renderEl,
    },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
      <img src={icon} alt={text} className="icon-img" />
      <span className="option-text">{text}</span>
    </div>
  );
}
