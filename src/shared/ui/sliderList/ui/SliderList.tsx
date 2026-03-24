import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { CardSimple } from '@/shared/ui/cardSimple';
import { ArrowButton } from '@/shared/ui/arrowButton';
import { TSliderListProps } from '../model/type';
import { Swiper as SwiperType } from 'swiper';
import styles from './SliderList.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import { BREAKPOINT_MOBILE, COLOR_MAIN } from '@/shared/styles/global';
import { TColorString } from '@/shared/model/type';
import useMediaQuery from '@/shared/lib/utils/hooks/useMediaQuery';

export const SliderList: React.FC<TSliderListProps> = ({ value }) => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const isMobile = useMediaQuery(`(max-width: ${BREAKPOINT_MOBILE}px)`);

  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  const dataHash = useMemo(() => {
    return value.map((v) => `${v.year}-${v.desc}`).join(',');
  }, [value]);

  const updateButtonStates = (swiper: SwiperType) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  const handleSlideChange = () => {
    if (swiperRef.current) {
      updateButtonStates(swiperRef.current);
    }
  };

  const handleSwiper = (swiper: SwiperType) => {
    swiperRef.current = swiper;
    updateButtonStates(swiper);
  };

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(0);
      swiperRef.current.update();
      updateButtonStates(swiperRef.current);
    }
  }, [dataHash]);

  return (
    <div className={styles.cont}>
      <div className={styles.innerCont}>
        <Swiper
          modules={[Navigation]}
          spaceBetween={isMobile ? 25 : 80}
          slidesPerView={isMobile ? 1.5 : 3}
          loop={false}
          className={styles.swiper}
          onSwiper={handleSwiper}
          onSlideChange={handleSlideChange}
        >
          {value.map((val, i) => (
            <SwiperSlide key={i}>
              <CardSimple
                heading={val.year}
                desc={val.desc}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {!isMobile && (
        <>
          <ArrowButton
            ref={prevRef}
            className={`my-prev ${styles.leftBtn}`}
            onClick={() => swiperRef.current?.slidePrev()}
            disabled={isBeginning}
            style={{ visibility: isBeginning ? 'hidden' : 'visible' }}
            direction={'l'}
            color={'white' as TColorString}
            accentColor={COLOR_MAIN}
            withShadow
            withBorder={false}
            size={40}
          />
          <ArrowButton
            ref={nextRef}
            className={`my-next ${styles.rightBtn}`}
            onClick={() => swiperRef.current?.slideNext()}
            disabled={isEnd}
            style={{ visibility: isEnd ? 'hidden' : 'visible' }}
            direction={'r'}
            color={'white' as TColorString}
            accentColor={COLOR_MAIN}
            withShadow
            withBorder={false}
            size={40}
          />
        </>
      )}
    </div>
  );
};
