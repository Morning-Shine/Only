import { IMockInfo } from '@/shared/api/mocks/model/type';
import { Dispatch, SetStateAction } from 'react';

export type TCurclePickerProps = {
  data: IMockInfo[] | null;
  activeCathegory: number;
  setActiveCathegory: Dispatch<SetStateAction<number>>;
};

export type TPointProps = {
  isActive: boolean;
  index: number;
  total: number;
  handleClick: (i: number) => void;
  // label?: string;
  // rotation: number;
};
