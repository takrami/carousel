import { useState, useRef } from "react";

import Slide from "../Slide";
import { data } from "../../data";
import { useWidth } from "../../hooks/utils";
import { SlideInterface } from "../../types";

import { SliderContainer, SliderList } from "./style";

const Slider: React.FC = () => {
  const slides: SlideInterface[] = data.items;
  const length = slides.length;
  const sliderContainerRef = useRef<HTMLDivElement>(null);
  const width: number = useWidth(sliderContainerRef);
  const [current, setCurrent] = useState<number>(0);
  const sliderContainerWidth = width * length;
  return (
    <SliderContainer ref={sliderContainerRef}>
      <SliderList
        style={{
          width: sliderContainerWidth,
          transform: `translate3d(-${current * width}px, 0px, 0px)`,
        }}
      >
        {slides.map((slide) => {
          return <Slide key={slide.id} slide={slide} width={width} />;
        })}
      </SliderList>
    </SliderContainer>
  );
};

export default Slider;
