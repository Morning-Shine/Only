import React from 'react';
import { TDoubleBigNumbersProps } from '../model/type';
import { TColorString } from '@/shared/model/type';
import styles from './Info.module.scss';
import { BigText } from '@/shared/ui/bigText';
import { AnimatedYearCounter } from '@/shared/ui/animatedDigit';
import useMediaQuery from '@/shared/lib/utils/hooks/useMediaQuery';
import {
  BREAKPOINT_MOBILE,
  COLOR_CONTRAST,
  COLOR_MAIN,
} from '@/shared/styles/global';

export const DoubleBigNumbers: React.FC<TDoubleBigNumbersProps> = (props) => {
  const { num1, num2 } = props;

  const isMobile = useMediaQuery(`(max-width: ${BREAKPOINT_MOBILE}px)`);

  return (
    <div className={styles.numbersWrapper}>
      <BigText
        size={'lg'}
        color={
          !isMobile ? ('#5D5FEF' as TColorString) : (COLOR_MAIN as TColorString)
        }
      >
        <AnimatedYearCounter year={num1} />
      </BigText>
      <BigText
        size={'lg'}
        color={
          !isMobile
            ? (COLOR_CONTRAST as TColorString)
            : ('rgb(241, 120, 182)' as TColorString)
        }
      >
        <AnimatedYearCounter year={num2} />
      </BigText>
    </div>
  );
};
