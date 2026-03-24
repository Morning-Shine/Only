export type TInfoCathegory =
  | 'since'
  | 'cinema'
  | 'literature'
  | 'theater'
  | 'music'
  | 'painting';

export interface IMockData {
  year: number;
  desc: string;
}
export interface IMockInfo {
  period: [number, number];
  cathegory?: TInfoCathegory;
  data: IMockData[];
}
