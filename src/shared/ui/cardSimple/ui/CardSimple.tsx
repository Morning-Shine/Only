import React from 'react';
import styles from './CardSimple.module.scss';
import { BigText } from '@/shared/ui/bigText';
import { COLOR_MAIN } from '@/shared/styles/global';
import { TCardSimpleProps } from '../model/type';

export const CardSimple: React.FC<TCardSimpleProps> = (props) => {
  const { heading, desc } = props;
  return (
    <div className={styles.card}>
      <BigText
        size={'sm'}
        color={COLOR_MAIN}
      >
        <h6>{heading}</h6>
      </BigText>
      <p className={styles.description}>{desc}</p>
    </div>
  );
};
