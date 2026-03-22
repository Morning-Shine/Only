import { Dispatch, SetStateAction } from 'react';

type TUsePaginationProps = {
  total: number;
  setActive: Dispatch<SetStateAction<number>>;
};

export default function usePagination({
  total,
  setActive,
}: TUsePaginationProps) {
  const next = () => setActive((prev) => Math.min(prev + 1, total - 1));
  const prev = () => setActive((prev) => Math.max(prev - 1, 0));

  return { next, prev };
}
