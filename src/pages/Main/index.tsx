import { slider } from "../../data";
import Header from "../../components/Header";
import Slider from "../../components/Slider";

import { PageContainer, MainContainer } from "./style";

const Main: React.FC = () => {
  return (
    <PageContainer>
      <Header />
      <MainContainer>
        {/* You can pass parameters here. For more information: https://github.com/takrami/carousel#how-to-use-slider-component */}
        <Slider
          slides={slider.items}
          showArrows={true}
          showDots={true}
          autoPlay={true}
        />
      </MainContainer>
    </PageContainer>
  );
};

export default Main;
