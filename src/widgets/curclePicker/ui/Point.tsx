import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import getPosition from '../lib/getPosition';
import styles from './CurclePicker.module.scss';
import { TPointProps } from '../model/type';
import { CURCLE_ACTIVE_ITEM_SIZE, CURCLE_ITEM_SIZE } from '../model/constants';
import { COLOR_MAIN_BG } from '@/shared/styles/global';
import { FloatingText } from '@/shared/ui/floatingText';

export const Point: React.FC<TPointProps> = (props) => {
  const { isActive, index, total, handleClick, label } = props;
  const ref = useRef<HTMLDivElement | null>(null);
  const numberRef = useRef<HTMLParagraphElement | null>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);
  const { x, y } = getPosition(index, total);
  const offsetX = 20;

  useEffect(() => {
    if (!ref.current || !numberRef.current) return;
    const shift = -(CURCLE_ACTIVE_ITEM_SIZE - CURCLE_ITEM_SIZE) / 2;
    tl.current = gsap.timeline({ paused: true });

    tl.current.to(ref.current, {
      width: CURCLE_ACTIVE_ITEM_SIZE,
      height: CURCLE_ACTIVE_ITEM_SIZE,
      x: shift,
      y: shift,
      backgroundColor: COLOR_MAIN_BG,
      borderColor: 'rgba(48, 62, 88, 0.5)',
      duration: 0.6,
      ease: 'power2.out',
    });

    tl.current.to(
      numberRef.current,
      {
        opacity: 1,
        duration: 0.2,
        ease: 'power2.out',
      },
      '<',
    );
  }, []);

  useEffect(() => {
    if (!tl.current) return;
    tl.current.pause();
    if (isActive) {
      tl.current.tweenTo(tl.current.duration());
    } else {
      tl.current.tweenTo(0);
    }
  }, [isActive]);

  const handleEnter = () => {
    if (isActive) return;
    tl.current?.play();
  };

  const handleLeave = () => {
    if (isActive) return;
    tl.current?.reverse();
  };

  return (
    <>
      <div
        ref={ref}
        className={`${styles.circleItem} ${isActive ? styles.active : ''}`}
        style={{
          left: `calc(50% + ${x}px - ${CURCLE_ITEM_SIZE / 2}px)`,
          top: `calc(50% + ${y}px - ${CURCLE_ITEM_SIZE / 2}px)`,
          cursor: isActive ? 'default' : 'pointer',
        }}
        onClick={() => handleClick(index)}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        <p ref={numberRef}>{index + 1}</p>
      </div>
      {/* {isActive && label && <FloatingText text={label} />} */}
    </>
  );
};
