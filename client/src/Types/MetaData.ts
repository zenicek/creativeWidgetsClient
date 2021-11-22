export interface MetaData {
  elementType: string;
  elementDescription: string;
  value?: string | number;
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
