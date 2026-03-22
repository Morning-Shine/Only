import { Dispatch, SetStateAction } from 'react';

export type TPaginationProps = {
  activeCathegory: number;
  setActiveCathegory: Dispatch<SetStateAction<number>>;
  total: number;
};
