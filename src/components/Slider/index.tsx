import React, { useState, useEffect, useRef } from "react";

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
} from "./style";

const Slider: React.FC<{
  slides: SlideInterface[];
  autoPlay?: boolean;
  showArrow?: boolean;
  showDots?: boolean;
}> = ({ slides, autoPlay = false, showArrow = true, showDots = true }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [dragStart, setDragStart] = useState(0);
  const [dragEnd, setDragEnd] = useState(0);
  const [delay, setDelay] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const sliderContainerRef = useRef<HTMLDivElement>(null);

  const width: number = useWidth(sliderContainerRef);

  const slidesLength: number = slides.length;

  const nextSlide = (): void => {
    setCurrentIndex(currentIndex === slidesLength - 1 ? 0 : currentIndex + 1);
  };

  const prevSlide = (): void => {
    setCurrentIndex(currentIndex === 0 ? slidesLength - 1 : currentIndex - 1);
  };

  const onDrag = (): void => {
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

  useEffect(() => {
    const handleKeyNavigation = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowLeft":
          prevSlide();
          break;
        case "ArrowRight":
          nextSlide();
          break;
        default:
          return;
      }
    };
    document.addEventListener("keydown", handleKeyNavigation);

    return () => document.removeEventListener("keydown", handleKeyNavigation);
  }, [nextSlide, prevSlide]);

  return (
    <SliderContainer
      aria-label="Minimal Images"
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
          return <Slide key={slide.id} slide={slide} />;
        })}
      </SliderList>
      {showArrow && (
        <>
          <NextButton aria-label="Next Slide" onClick={nextSlide} />
          <PrevButton aria-label="Previous Slide" onClick={prevSlide} />
        </>
      )}
      {showDots && (
        <Dots>
          {slides.map((slide, index) => {
            return (
              <Dot
                aria-label={`Slide ${currentIndex}`}
                key={slide.id}
                isActive={index === currentIndex}
                onClick={() => {
                  setCurrentIndex(index);
                }}
              />
            );
          })}
        </Dots>
      )}
    </SliderContainer>
  );
};

export default Slider;
