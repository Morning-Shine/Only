import React from 'react';
import styles from './CuriousInfo.module.scss';
import { Info } from '@/widgets/info';

export const CuriousInfo: React.FC = () => {
  return (
    <div className={styles.cont}>
      <Info />
    </div>
  );
};
