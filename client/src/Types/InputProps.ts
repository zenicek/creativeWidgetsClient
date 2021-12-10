export default interface InputProps {
  id: string;
  index: number;
  moveElement: (dragIndex: number, hoverIndex: number) => null;
}
