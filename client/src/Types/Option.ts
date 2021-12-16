export default interface Option {
  id: string;
  label: string;
  value: string | number;
  offValue: number | null;
  selected: boolean;
}
