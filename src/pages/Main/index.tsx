import Slider from "../../components/Slider";
import { MainContainer } from "./style";
import { slide } from "../../data";

const Main: React.FC = () => {
  return (
    <MainContainer>
      <Slider slides={slide.items} autoPlay={false} />
    </MainContainer>
  );
};

export default Main;
