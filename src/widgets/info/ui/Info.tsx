import React, { useEffect, useState } from 'react';
import { Heading } from '@/widgets/heading';
import { CurclePicker } from '@/widgets/curclePicker';
import { fetchInfo } from '@/shared/api/mocks/infoApi';
import { IMockInfo } from '@/shared/api/mocks/model/type';
import { HEADING_NAME } from '../model/constants';
import { Pagination } from '@/widgets/pagination';
import { DoubleBigNumbers } from './DoubleBigNumbers';
import styles from './Info.module.scss';

export const Info: React.FC = () => {
  const [data, setData] = useState<IMockInfo[] | null>(null);
  const [activeCathegory, setActiveCathegory] = useState(0);

  useEffect(() => {
    fetchInfo().then(setData);
  }, []);

  return (
    <article className={styles.cont}>
      <div className={styles.auxiliaryWrapper}>
        <Heading heading={HEADING_NAME} />
        {data && data.length && (
          <Pagination
            activeCathegory={activeCathegory}
            setActiveCathegory={setActiveCathegory}
            total={data.length}
          />
        )}
      </div>
      <CurclePicker
        data={data}
        activeCathegory={activeCathegory}
        setActiveCathegory={setActiveCathegory}
      />
      {data && data.length && (
        <DoubleBigNumbers
          num1={data[activeCathegory].period[0]}
          num2={data[activeCathegory].period[1]}
        />
      )}
    </article>
  );
};
