import { IMockInfo } from '@/shared/api/mocks/model/type';

export type TDoubleBigNumbersProps = {
  num1: number;
  num2: number;
};

export type TBottomContentProps = {
  activeCathegory: number;
  setActiveCathegory: React.Dispatch<React.SetStateAction<number>>;
  data: IMockInfo[];
  isMobile: boolean
};
