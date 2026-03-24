import React, { useEffect, useState } from 'react';
import { Heading } from '@/widgets/heading';
import { CurclePicker } from '@/widgets/curclePicker';
import { fetchInfo } from '@/shared/api/mocks/infoApi';
import { IMockInfo } from '@/shared/api/mocks/model/type';
import { HEADING_NAME } from '../model/constants';
import { DoubleBigNumbers } from './DoubleBigNumbers';
import styles from './Info.module.scss';
import useMediaQuery from '@/shared/lib/utils/hooks/useMediaQuery';
import { BREAKPOINT_MOBILE } from '@/shared/styles/global';
import { BottomContent } from './BottomContent';
import { PaginationDots } from '@/widgets/paginationDots';

export const Info: React.FC = () => {
  const [data, setData] = useState<IMockInfo[] | null>(null);
  const [activeCathegory, setActiveCathegory] = useState(0);
  /** @param можно передать для теста */
  useEffect(() => {
    fetchInfo().then(setData);
  }, []);

  const isMobile = useMediaQuery(`(max-width: ${BREAKPOINT_MOBILE}px)`);

  return (
    <article className={styles.cont}>
      <div className={styles.innerWrapper}>
        <div className={styles.headerWrapper}>
          <Heading heading={HEADING_NAME} />
        </div>
        {data && data.length && (
          <BottomContent
            activeCathegory={activeCathegory}
            setActiveCathegory={setActiveCathegory}
            data={data}
            isMobile={isMobile}
          />
        )}
      </div>
      {data && data.length && (
        <>
          {isMobile ? (
            <PaginationDots
              data={data}
              activeCathegory={activeCathegory}
              setActiveCathegory={setActiveCathegory}
            />
          ) : (
            <CurclePicker
              data={data}
              activeCathegory={activeCathegory}
              setActiveCathegory={setActiveCathegory}
            />
          )}
          <DoubleBigNumbers
            num1={data[activeCathegory].period[0]}
            num2={data[activeCathegory].period[1]}
          />
        </>
      )}
    </article>
  );
};
