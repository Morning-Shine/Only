import React, { useEffect, useRef } from 'react';
import { TPaginationDotsProps } from '../model/type';
import styles from './PaginationDots.module.scss';
import gsap from 'gsap';

export const PaginationDots: React.FC<TPaginationDotsProps> = (props) => {
  const { data, activeCathegory, setActiveCathegory } = props;
  const dotsRef = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
    dotsRef.current.forEach((dot, index) => {
      if (!dot) return;
      gsap.to(dot, {
        opacity: index === activeCathegory ? 1 : 0.5,
        duration: 1,
      });
    });
  }, [activeCathegory]);

  return (
    <div className={styles.dotsCont}>
      {data.map((_, index) => (
        <div
          key={index}
          ref={(el) => {
            dotsRef.current[index] = el;
          }}
          onClick={() => setActiveCathegory(index)}
          className={styles.dot}
          style={{
            opacity: index === activeCathegory ? 1 : 0.5,
          }}
        />
      ))}
    </div>
  );
};
