import React, { useEffect, useRef } from 'react';
import { TCurclePickerProps } from '../model/type';
import { CURCLE_SIZE, PERIODS_MAX_COUNT } from '../model/constants';
import gsap from 'gsap';
import styles from './CurclePicker.module.scss';
import { PointWithDescription } from './PointWithDescription';
import { INFO_CATHEGORY } from '@/shared/constants/mock';

export const CurclePicker: React.FC<TCurclePickerProps> = (props) => {
  const { data, activeCathegory, setActiveCathegory } = props;

  const containerRef = useRef<HTMLDivElement>(null);
  const rotationRef = useRef(0);

  useEffect(() => {
    animateRotation(activeCathegory);
  }, [activeCathegory]);

  const animateRotation = (index: number) => {
    if (!containerRef.current) return;

    const anglePerItem = 360 / total;
    const targetRotation = -anglePerItem * index;
    const diff = ((targetRotation - rotationRef.current + 540) % 360) - 180;

    const tl = gsap.timeline({
      defaults: { duration: 1, ease: 'power2.inOut' },
    });

    tl.to(containerRef.current, { rotation: rotationRef.current + diff }, 0);

    containerRef.current
      ?.querySelectorAll(`.${styles.pointWrapper}`)
      .forEach((el: any) => {
        tl.to(el, { rotation: -(rotationRef.current + diff) }, 0);
      });

    rotationRef.current += diff;
  };

  if (!data) return;

  const total = Math.min(data.length, PERIODS_MAX_COUNT);

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
          <PointWithDescription
            key={i}
            isActive={i === activeCathegory}
            index={i}
            total={total}
            handleClick={handleClick}
            label={
              data[activeCathegory]?.cathegory
                ? INFO_CATHEGORY[data[activeCathegory].cathegory]
                : ''
            }
          />
        );
      })}
    </div>
  );
};
