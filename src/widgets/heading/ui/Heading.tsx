import { GradientLine } from '@/shared/ui/gradientLine';
import React from 'react';
import styles from './Heading.module.scss';
import { THeadingProps } from '../model/type';
import useMediaQuery from '@/shared/lib/utils/hooks/useMediaQuery';
import { BREAKPOINT_MOBILE } from '@/shared/styles/global';

export const Heading: React.FC<THeadingProps> = ({ heading }) => {
  const isMobile = useMediaQuery(`(max-width: ${BREAKPOINT_MOBILE}px)`);
  return (
    <div className={styles.cont}>
      {!isMobile && (
        <GradientLine
          colors={['var(--main-color)', 'var(--contrast-color)']}
          thickness={5}
          direction="to bottom"
          incline="ver"
          marginIncline={7}
        />
      )}
      <p>{heading}</p>
    </div>
  );
};
