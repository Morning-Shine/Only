import React, { useEffect, useRef, useState } from 'react';
import { TYearCounterProps } from '../model/type';
import gsap from 'gsap';

export const AnimatedYearCounter: React.FC<TYearCounterProps> = (props) => {
  const { year, duration = 1 } = props;
  const [displayYear, setDisplayYear] = useState(year);
  const currentRef = useRef(displayYear);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (currentRef.current === year) return;
    timelineRef.current?.kill();
    const timeline = gsap.timeline();
    timelineRef.current = timeline;

    const step = year > currentRef.current ? 1 : -1;
    const steps = Math.abs(year - currentRef.current);

    for (let i = 1; i <= steps; i++) {
      timeline.to(
        {},
        {
          duration: duration / (steps + 1),
          onComplete: () => {
            currentRef.current += step;
            setDisplayYear(currentRef.current);
          },
        },
      );
    }
    return () => {
      timeline.kill();
    };
  }, [year, duration]);

  return <p>{displayYear}</p>;
};
