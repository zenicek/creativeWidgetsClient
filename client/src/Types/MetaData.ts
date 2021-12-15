export interface MetaData {
  __kind: string;
  type: string;
  description: string;
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
