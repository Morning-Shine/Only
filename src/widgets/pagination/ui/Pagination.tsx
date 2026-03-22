import { COLOR_ACCENT } from '@/shared/styles/global';
import { Arrow } from '@/shared/ui/arrow';
import React from 'react';
import styles from './Pagination.module.scss';
import { TPaginationProps } from '../model/type';
import padZero from '@/shared/lib/utils/padZero';
import usePagination from '@/shared/lib/utils/hooks/usePagination';

export const Pagination: React.FC<TPaginationProps> = (props) => {
  const { activeCathegory, setActiveCathegory, total } = props;

  const { next, prev } = usePagination({
    total,
    setActive: setActiveCathegory,
  });

  return (
    <div className={styles.cont}>
      <p>
        {padZero(activeCathegory + 1, 2)}/{padZero(total, 2)}
      </p>
      <div className={styles.arrowsWrapper}>
        <Arrow
          color={COLOR_ACCENT}
          disable={activeCathegory === 0}
          direction={'l'}
          onClick={() => prev()}
        />
        <Arrow
          color={COLOR_ACCENT}
          disable={activeCathegory === total - 1}
          direction={'r'}
          onClick={() => next()}
        />
      </div>
    </div>
  );
};
