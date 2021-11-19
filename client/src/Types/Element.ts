export interface Element {
  elementType: string;
  elementIndex: number;
  elementLetter: string;
  elementDescription: string;
  value: number;
  min: number;
  max: number;
  step: number;
  list: [
    {
      id: string;
      label: any;
      value: number;
      offValue: number;
      selected: boolean;
    }
  ];
}
