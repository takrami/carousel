import { SlideInterface } from "../../types";

import { SlideItem, SlideImage } from "./style";

const Slide: React.FC<{ slide: SlideInterface; width: number }> = ({
  slide,
  width,
}) => {
  return (
    <SlideItem>
      <SlideImage src={slide.image} alt={slide.title} />
    </SlideItem>
  );
};

export default Slide;
