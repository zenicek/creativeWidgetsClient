import { useEffect } from 'react';
import './List.item.css';
import { useDrag } from 'react-dnd';

export function ListItem({ icon, text, element, renderEl }) {
  useEffect(() => {
    console.log(element);
  }, []);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: element,
    item: {
      whatEl: element,
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
