import { SlideInterface } from "../../types";
import { SlideImage } from "./style";

const Slide: React.FC<{ slide: SlideInterface }> = ({ slide }) => {
  return (
    <li>
      <SlideImage src={slide.image} alt={slide.title} />
    </li>
  );
};

export default Slide;
