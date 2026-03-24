import React from 'react';
import { THeadingSimpleProps } from '../model/type';
import styles from './HeadingSimple.module.scss';

export const HeadingSimple: React.FC<THeadingSimpleProps> = (props) => {
  const { text, withUnderline } = props;
  return (
    <p className={`${styles.text} ${withUnderline && styles.underline}`}>
      {text}
    </p>
  );
};
