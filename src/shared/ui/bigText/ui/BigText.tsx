import React, { useEffect, useRef, useState } from 'react';
import { TBigTextProps } from '../model/type';
import styles from './BigText.module.scss';

export const BigText: React.FC<TBigTextProps> = (props) => {
  const { size, color, children } = props;

  let sizeClass;
  switch (size) {
    case 'lg':
      sizeClass = styles.lg;
      break;
    case 'sm':
      sizeClass = styles.sm;
      break;
  }

  return (
    <div
      className={sizeClass}
      style={{ color: color }}
    >
      {children}
    </div>
  );
};
