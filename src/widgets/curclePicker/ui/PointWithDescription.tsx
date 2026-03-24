import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import getPosition from '../lib/getPosition';
import styles from './CurclePicker.module.scss';
import { TPointWithDescriptionProps } from '../model/type';
import { CURCLE_ACTIVE_ITEM_SIZE } from '../model/constants';
import { COLOR_MAIN_BG } from '@/shared/styles/global';

export const PointWithDescription: React.FC<TPointWithDescriptionProps> = (
  props,
) => {
  const { isActive, index, total, handleClick, label } = props;

  const [visibleLabel, setVisibleLabel] = useState<string | null>(null);

  const ref = useRef<HTMLDivElement | null>(null);
  const numberRef = useRef<HTMLParagraphElement | null>(null);
  const floatingRef = useRef<HTMLDivElement | null>(null);
  const labelRef = useRef(label);
  const tl = useRef<gsap.core.Timeline | null>(null);
  const isHovering = useRef(false);

  const { x, y } = getPosition(index, total);

  useEffect(() => {
    if (!ref.current || !numberRef.current || !floatingRef.current) return;
    tl.current = gsap.timeline({ paused: true });

    tl.current.to(ref.current, {
      width: CURCLE_ACTIVE_ITEM_SIZE,
      height: CURCLE_ACTIVE_ITEM_SIZE,
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
    tl.current.add(() => {
      if (isHovering.current) return;
      setVisibleLabel(labelRef.current);
      if (floatingRef.current) {
        gsap.set(floatingRef.current, { opacity: 1 });
      }
    }, '+=0.2');
    gsap.set(floatingRef.current, { opacity: 0 });
  }, []);

  useEffect(() => {
    labelRef.current = label;
  }, [label]);

  useEffect(() => {
    if (!floatingRef.current || !tl.current) return;
    if (isActive) {
      tl.current.restart();
    } else {
      gsap.to(floatingRef.current, {
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
        onComplete: () => setVisibleLabel(null),
      });

      tl.current.reverse();
    }
  }, [isActive]);

  const handleEnter = () => {
    if (isActive) return;
    isHovering.current = true;
    tl.current?.play();
  };

  const handleLeave = () => {
    if (isActive) return;
    isHovering.current = false;
    tl.current?.reverse();
  };

  return (
    <div
      className={styles.pointWrapper}
      style={{
        left: `calc(50% + ${x}px)`,
        top: `calc(50% + ${y}px)`,
      }}
    >
      <div
        ref={ref}
        className={`${styles.circleItem} ${isActive ? styles.active : ''}`}
        style={{
          cursor: isActive ? 'default' : 'pointer',
        }}
        onClick={() => {
          isHovering.current = false;
          handleClick(index);
        }}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        <p ref={numberRef}>{index + 1}</p>
      </div>
      <h6
        ref={floatingRef}
        className={styles.floatingText}
        style={{
          left: `${CURCLE_ACTIVE_ITEM_SIZE / 2 + 20}px`,
        }}
      >
        {visibleLabel}
      </h6>
    </div>
  );
};
