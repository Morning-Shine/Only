import React, { useEffect, useRef } from 'react';
import { TFloatingTextProps } from '../model/type';
import styles from './FloatingText.module.scss';
import { gsap } from 'gsap';

export const FloatingText: React.FC<TFloatingTextProps> = (props) => {
  const ref = useRef<HTMLDivElement>(null);
  const { text } = props;

  //   useEffect(() => {
  //     const el = ref.current;
  //     if (!el) return;

  //     gsap.fromTo(
  //       el,
  //       { opacity: 0, scale: 0.5, x, y },
  //       { opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out' },
  //     );

  //     return () => {
  //       gsap.to(el, { opacity: 0, scale: 0.5, duration: 0.5, ease: 'power2.in' });
  //     };
  //   }, [x, y]);

  return (
    <div
      className={styles.pointCathegory}
      ref={ref}
      style={{
        position: 'absolute',
        right: 0,
        top: 0,
      }}
    >
      <p>{text}</p>
    </div>
  );
};
