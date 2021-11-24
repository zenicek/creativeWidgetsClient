export default interface Props {
  id: string;
  index: number;
  moveElement: (dragIndex: number, hoverIndex: number) => null;
}
