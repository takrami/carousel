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
  width: number;
}> = ({ slide, width }) => {
  return (
    <SlideItem>
      <SlideImage src={slide.image} alt={slide.title} />
      <SlideContentContainer>
        <SlideTitle>{slide.title}</SlideTitle>
        <SlideDescription>{slide.description}</SlideDescription>
      </SlideContentContainer>
    </SlideItem>
  );
};

export default Slide;
