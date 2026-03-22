export type TInfoCathegory =
  | 'since'
  | 'cinema'
  | 'literature'
  | 'theater'
  | 'music'
  | 'painting';

interface IMockData {
  year: number;
  desc: string;
  cathegory: TInfoCathegory;
}
export interface IMockInfo {
  period: [number, number];
  data: IMockData[];
}
