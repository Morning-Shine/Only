import React from 'react';
import { TDoubleBigNumbersProps } from '../model/type';
import { TColorString } from '@/shared/model/type';
import styles from './Info.module.scss';
import { BigText } from '@/shared/ui/bigText';
import { AnimatedYearCounter } from '@/shared/ui/animatedDigit';

export const DoubleBigNumbers: React.FC<TDoubleBigNumbersProps> = (props) => {
  const { num1, num2 } = props;

  return (
    <div className={styles.numbersWrapper}>
      <BigText
        size={'lg'}
        color={'#5D5FEF' as TColorString}
      >
        <AnimatedYearCounter year={num1} />
      </BigText>
      <BigText
        size={'lg'}
        color={'#EF5DA8' as TColorString}
      >
        <AnimatedYearCounter year={num2} />
      </BigText>
    </div>
  );
};
