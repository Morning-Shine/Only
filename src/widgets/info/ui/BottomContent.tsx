import React, { useEffect, useRef, useState } from 'react';
import styles from './Info.module.scss';
import { Pagination } from '@/widgets/pagination';
import { SliderList } from '@/shared/ui/sliderList';
import { HeadingSimple } from '@/shared/ui/headingSimple';
import { INFO_CATHEGORY } from '@/shared/constants/mock';
import { TBottomContentProps } from '../model/type';
import { gsap } from 'gsap';

export const BottomContent: React.FC<TBottomContentProps> = (props) => {
  const { activeCathegory, setActiveCathegory, data, isMobile } = props;
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!divRef.current) return;
    if (isMobile) {
      requestAnimationFrame(() => {
        gsap.fromTo(
          divRef.current,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
        );
      });
    } else {
      requestAnimationFrame(() => {
        gsap.fromTo(
          divRef.current,
          { opacity: 0 },
          { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out', delay: 1 },
        );
      });
    }
  }, [isMobile, activeCathegory]);

  return (
    <div className={styles.bottomWrapper}>
      <div className={styles.paginationWrapper}>
        <Pagination
          activeCathegory={activeCathegory}
          setActiveCathegory={setActiveCathegory}
          total={data.length}
        />
      </div>
      <div ref={divRef}>
        {isMobile && data[activeCathegory]?.cathegory && (
          <div className={styles.subHeadingWrapper}>
            <HeadingSimple
              text={INFO_CATHEGORY[data[activeCathegory].cathegory]}
              withUnderline
            />
          </div>
        )}
        <SliderList value={data[activeCathegory].data} />
      </div>
    </div>
  );
};
