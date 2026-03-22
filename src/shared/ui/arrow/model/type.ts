import { TColorString } from '@/shared/model/type';

export type TArrowProps = {
  disable: boolean;
  direction: 'l' | 'r';
  color: TColorString;
  onClick: () => void;
};
