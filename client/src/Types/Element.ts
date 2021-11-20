export interface Element {
  elementType: string;
  elementIndex: number;
  elementLetter: string;
  elementDescription: string;
  value: number | string;
  min?: number;
  max?: number;
  step?: number;
  list?: [
    {
      id: string;
      label: any;
      value: number;
      offValue: number;
      selected: boolean;
    }
  ];
}
