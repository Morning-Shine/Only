import { TColorString } from '@/shared/model/type';
import { ButtonHTMLAttributes } from 'react';

export type TArrowButtonProps = {
  direction: 'l' | 'r';
  color: TColorString;
  accentColor: TColorString;
  size?: number;
  withBorder?: boolean;
  withShadow?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;
