import React, { useEffect, useMemo, useRef } from 'react';
import { TCurclePickerProps } from '../model/type';
import {
  CURCLE_ACTIVE_ITEM_SIZE,
  CURCLE_ITEM_SIZE,
  CURCLE_SIZE,
  PERIODS_MAX_COUNT,
} from '../model/constants';
import { FloatingText } from '@/shared/ui/floatingText';
import gsap from 'gsap';
import styles from './CurclePicker.module.scss';
import { Point } from './Point';
import { INFO_CATHEGORY } from '@/shared/constants/mock';
import getPosition from '../lib/getPosition';

export const CurclePicker: React.FC<TCurclePickerProps> = (props) => {
  const { data, activeCathegory, setActiveCathegory } = props;

  const containerRef = useRef<HTMLDivElement>(null);
  const rotationRef = useRef(0);
  const floatingRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    animateRotation(activeCathegory);
  }, [activeCathegory]);

  const animateRotation = (index: number) => {
    if (!containerRef.current) return;

    const anglePerItem = 360 / total;
    const targetRotation = -anglePerItem * index;
    const diff = ((targetRotation - rotationRef.current + 540) % 360) - 180;

    const newRotation = rotationRef.current + diff;

    const tl = gsap.timeline({
      defaults: { duration: 1, ease: 'power2.inOut' },
    });

    tl.to(containerRef.current, { rotation: rotationRef.current + diff }, 0);

    containerRef.current
      ?.querySelectorAll(`.${styles.circleItem}`)
      .forEach((el: any) => {
        tl.to(el, { rotation: -(rotationRef.current + diff) }, 0);
      });

    if (floatingRef.current) {
      tl.to(floatingRef.current, { rotation: -newRotation }, 0);
    }
    rotationRef.current += diff;
    console.log('rotationRef', rotationRef);
    console.log('activeCathegory', activeCathegory);
  };

  if (!data) return;

  const total = Math.min(data.length, PERIODS_MAX_COUNT);

  const activePos = useMemo(() => {
    if (!data || !data[activeCathegory]) return { x: 0, y: 0 };
    return getPosition(activeCathegory, total);
  }, [activeCathegory, total, data]);

  const handleClick = (index: number) => {
    setActiveCathegory(index);
  };

  return (
    <div
      style={{ width: CURCLE_SIZE, height: CURCLE_SIZE }}
      className={styles.curcle}
      ref={containerRef}
    >
      {data.map((point, i) => {
        return (
          <Point
            key={i}
            isActive={i === activeCathegory}
            index={i}
            total={total}
            handleClick={handleClick}
            // label={
            //   point?.cathegory ? INFO_CATHEGORY[point.cathegory] : undefined
            // }
            // rotation={rotationRef.current}
          />
        );
      })}
      {/* <FloatingText text={'ДОДЕЛАТЬ'} /> */}
      {data[activeCathegory]?.cathegory && (
        <div
          ref={floatingRef}
          className={styles.floatingText}
          style={{
            position: 'absolute',
            left: `calc(50% + ${activePos.x}px + ${CURCLE_ACTIVE_ITEM_SIZE / 2 + 20}px)`,
            top: `calc(50% + ${activePos.y}px + ${-(CURCLE_ACTIVE_ITEM_SIZE - CURCLE_ITEM_SIZE) / 2}px)`,
            transformOrigin: 'left center',
            pointerEvents: 'none',
            whiteSpace: 'nowrap',
          }}
        >
          {INFO_CATHEGORY[data[activeCathegory].cathegory]}
        </div>
      )}
    </div>
  );
};
