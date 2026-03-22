import { TColorString } from '@/shared/model/type';

export type TBigTextProps = {
  size: 'lg' | 'sm';
  color: TColorString;
  children: React.ReactElement;
};
