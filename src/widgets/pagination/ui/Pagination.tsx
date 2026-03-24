import {
  BREAKPOINT_MOBILE,
  COLOR_ACCENT,
  COLOR_MAIN_BG,
} from '@/shared/styles/global';
import { ArrowButton } from '@/shared/ui/arrowButton';
import React from 'react';
import styles from './Pagination.module.scss';
import { TPaginationProps } from '../model/type';
import padZero from '@/shared/lib/utils/padZero';
import usePagination from '@/shared/lib/utils/hooks/usePagination';
import useMediaQuery from '@/shared/lib/utils/hooks/useMediaQuery';
import { hexToRgb } from '@/shared/lib/utils/hexToRgb';
import { TColorString } from '@/shared/model/type';

export const Pagination: React.FC<TPaginationProps> = (props) => {
  const { activeCathegory, setActiveCathegory, total } = props;
  const isMobile = useMediaQuery(`(max-width: ${BREAKPOINT_MOBILE}px)`);

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
        <ArrowButton
          color={COLOR_MAIN_BG}
          accentColor={COLOR_ACCENT}
          disabled={activeCathegory === 0}
          direction={'l'}
          onClick={() => prev()}
          size={isMobile ? 25 : 50}
        />
        <ArrowButton
          color={COLOR_MAIN_BG}
          accentColor={COLOR_ACCENT}
          disabled={activeCathegory === total - 1}
          direction={'r'}
          onClick={() => next()}
          size={isMobile ? 25 : 50}
        />
      </div>
    </div>
  );
};
