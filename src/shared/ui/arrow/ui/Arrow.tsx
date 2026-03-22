import React from 'react';
import styles from './Arrow.module.scss';
import { TArrowProps } from '../model/type';
import ArrowIcon from '@/shared/assets/icons/arrow.svg';

export const Arrow: React.FC<TArrowProps> = (props) => {
  const { disable, direction, color, onClick } = props;

  return (
    <div
      className={`${styles.curcleArrow} ${disable && styles.disabled}`}
      style={{
        borderColor: color,
        cursor: disable ? 'not-allowed' : 'pointer',
      }}
      onClick={onClick}
    >
      <ArrowIcon
        style={{
          color: color,
          transform: direction === 'l' ? 'rotate(0)' : 'rotate(180deg)',
        }}
      />
    </div>
  );
};
