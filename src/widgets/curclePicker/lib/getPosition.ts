import { CURCLE_SIZE, CURCLE_ACTIVE_ITEM_SIZE } from '../model/constants';

export default function getPosition(index: number, total: number) {
  const angle = (360 / total) * index - 60;
  const radius = CURCLE_SIZE / 2 ;
  const rad = (angle * Math.PI) / 180;
  const x = radius * Math.cos(rad);
  const y = radius * Math.sin(rad);
  return { x, y };
}
