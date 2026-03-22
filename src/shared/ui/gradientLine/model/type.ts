type TDirection = 'to right' | 'to left' | 'to top' | 'to bottom';

export interface IGradientLineProps {
  colors: string[];
  incline: 'ver' | 'hor';
  direction?: TDirection;
  thickness?: number;
  marginIncline?: number
}
