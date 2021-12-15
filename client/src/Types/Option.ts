export default interface Option {
  id: string;
  label: string;
  value: number | null;
  offValue: number | null;
  selected: boolean;
}
