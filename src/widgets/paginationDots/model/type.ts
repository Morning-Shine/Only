import { IMockInfo } from '@/shared/api/mocks/model/type';
import { Dispatch, SetStateAction } from 'react';

export type TPaginationDotsProps = {
  data: IMockInfo[];
  activeCathegory: number;
  setActiveCathegory: Dispatch<SetStateAction<number>>;
};
