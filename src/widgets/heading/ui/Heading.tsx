import { GradientLine } from '@/shared/ui/gradientLine';
import React from 'react';
import styles from './Heading.module.scss';
import { THeadingProps } from '../model/type';

export const Heading: React.FC<THeadingProps> = ({ heading }) => {
  return (
    <div className={styles.cont}>
        <GradientLine
          colors={['var(--main-color)', 'var(--contrast-color)']}
          thickness={5}
          direction="to bottom"
          incline="ver"
          marginIncline={7}
        />
      <p>{heading}</p>
    </div>
  );
};
