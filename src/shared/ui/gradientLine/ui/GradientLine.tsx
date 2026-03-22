import React from 'react';
import styles from './GradientLine.module.scss';
import { IGradientLineProps } from '../model/type';

export const GradientLine: React.FC<IGradientLineProps> = ({
  colors,
  incline = 'ver',
  direction = 'to right',
  thickness = 2,
  marginIncline = 0,
}) => {
  const gradient = `linear-gradient(${direction}, ${colors.join(', ')})`;
  const height = incline === 'ver' ? 'auto' : `${thickness}px`;
  const width = incline === 'ver' ? `${thickness}px` : '100%';
  const margin =
    incline === 'ver' ? `${marginIncline}px 0` : `0 ${marginIncline}px`;
  
  return (
    <div
      className={`${styles.line}`}
      style={{
        backgroundImage: gradient,
        height: height,
        width: width,
        margin: margin,
      }}
    />
  );
};
