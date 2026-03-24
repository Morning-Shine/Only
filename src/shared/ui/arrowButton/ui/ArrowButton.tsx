import React, { forwardRef } from 'react';
import styles from './ArrowButton.module.scss';
import { TArrowButtonProps } from '../model/type';
import ArrowIcon from '@/shared/assets/icons/arrow.svg';
import ArrowIconSmall from '@/shared/assets/icons/arrowSmall.svg';
import { hexToRgb } from '@/shared/lib/utils/hexToRgb';

export const ArrowButton = forwardRef<HTMLButtonElement, TArrowButtonProps>(
  (props, ref) => {
    const {
      direction,
      color,
      accentColor,
      size = 50,
      withBorder = true,
      withShadow = false,
      className,
      style,
      ...buttonProps
    } = props;

    const iconStyle = {
      color: accentColor,
      transform: direction === 'l' ? 'rotate(0)' : 'rotate(180deg)',
    };

    return (
      <button
        ref={ref}
        className={`${styles.curcleArrow} ${className ?? ''}`}
        style={{
          border: withBorder
            ? `1px solid rgba(${hexToRgb(accentColor)}, 0.5)`
            : 'none',
          boxShadow: withShadow
            ? `0px 0px 15px rgba(${hexToRgb(accentColor)}, 0.1)`
            : 'none',
          backgroundColor: color,
          width: `${size}px`,
          height: `${size}px`,
          ...style,
        }}
        {...buttonProps}
      >
        {size > 30 ? (
          <ArrowIcon style={iconStyle} />
        ) : (
          <ArrowIconSmall style={iconStyle} />
        )}
      </button>
    );
  },
);
