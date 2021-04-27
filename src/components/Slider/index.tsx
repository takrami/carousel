import { useState, useRef } from "react";

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

const Slider: React.FC<{ slides: SlideInterface[] }> = ({ slides }) => {
  const slidesLength: number = slides.length;

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const sliderContainerRef = useRef<HTMLDivElement>(null);
  const width: number = useWidth(sliderContainerRef);

  const nextSlide = (): void => {
    setCurrentIndex(currentIndex === slidesLength - 1 ? 0 : currentIndex + 1);
  };

  const prevSlide = (): void => {
    setCurrentIndex(currentIndex === 0 ? slidesLength - 1 : currentIndex - 1);
  };

  return (
    <SliderContainer ref={sliderContainerRef}>
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
