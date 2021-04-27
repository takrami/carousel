import Slide from "../Slide";

import { data } from "../../data";
import { SlideInterface } from "../../types";

import { SliderContainer } from "./style";

const Slider: React.FC = () => {
  const slides: SlideInterface[] = data.items;

  return (
    <SliderContainer>
      <ul>
        {slides.map((slide) => {
          return <Slide key={slide.id} slide={slide} />;
        })}
      </ul>
    </SliderContainer>
  );
};

export default Slider;
