import { SlideInterface } from "../../types";

import {
  SlideItem,
  SlideImage,
  SlideContentContainer,
  SlideTitle,
  SlideDescription,
} from "./style";

const Slide: React.FC<{
  slide: SlideInterface;
}> = ({ slide }) => {
  return (
    <SlideItem>
      <SlideImage src={slide.image} alt={slide.title} />
      <SlideContentContainer>
        <SlideTitle className="slide-title">{slide.title}</SlideTitle>
        <SlideDescription className="slide-description">
          {slide.description}
        </SlideDescription>
      </SlideContentContainer>
    </SlideItem>
  );
};

export default Slide;
