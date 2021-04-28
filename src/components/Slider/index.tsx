import { useState, useEffect, useRef } from "react";

import Slide from "../Slide";
import { useWidth } from "../../hooks/utils";
import { SlideInterface } from "../../types";

import {
  SliderContainer,
  SliderList,
  NextButton,
  PrevButton,
  Dots,
  Dot,
  DotIcon,
} from "./style";

const Slider: React.FC<{
  slides: SlideInterface[];
  autoPlay: boolean;
}> = ({ slides, autoPlay }) => {
  const slidesLength: number = slides.length;

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const sliderContainerRef = useRef<HTMLDivElement>(null);
  const width: number = useWidth(sliderContainerRef);

  const [dragStart, setDragStart] = useState(0);
  const [dragEnd, setDragEnd] = useState(0);
  const [delay, setDelay] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = (): void => {
    setCurrentIndex(currentIndex === slidesLength - 1 ? 0 : currentIndex + 1);
  };

  const prevSlide = (): void => {
    setCurrentIndex(currentIndex === 0 ? slidesLength - 1 : currentIndex - 1);
  };

  const onDrag = () => {
    if (dragStart < dragEnd) {
      prevSlide();
    } else {
      nextSlide();
    }
  };

  useEffect(() => {
    setDelay(slides[currentIndex].delay);
  }, [currentIndex, slides]);

  useEffect(() => {
    if (autoPlay && !isHovered) {
      const timeout = setTimeout(() => {
        setCurrentIndex(
          currentIndex === slidesLength - 1 ? 0 : currentIndex + 1
        );
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [autoPlay, currentIndex, delay, isHovered, slidesLength]);

  return (
    <SliderContainer
      ref={sliderContainerRef}
      onDragStart={(e) => {
        setDragStart(e.clientX);
      }}
      onDragLeave={(e) => {
        setDragEnd(e.clientX);
      }}
      onDragEnd={() => {
        onDrag();
      }}
      onTouchStart={(e) => {
        setDragStart(e.changedTouches[0].clientX);
      }}
      onTouchEnd={(e) => {
        setDragEnd(e.changedTouches[0].clientX);
        onDrag();
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <SliderList
        sliderContainerWidth={width * slidesLength}
        currentIndex={currentIndex}
        slideWidth={width}
      >
        {slides.map((slide) => {
          return <Slide key={slide.id} slide={slide} width={width} />;
        })}
      </SliderList>
      <NextButton onClick={nextSlide} />
      <PrevButton onClick={prevSlide} />
      <Dots>
        {slides.map((slide, index) => {
          return (
            <Dot key={slide.id}>
              <DotIcon
                key={slide.id}
                isActive={index === currentIndex}
                onClick={() => {
                  setCurrentIndex(index);
                }}
              />
            </Dot>
          );
        })}
      </Dots>
    </SliderContainer>
  );
};

export default Slider;
