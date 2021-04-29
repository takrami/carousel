import { slider } from "../../data";
import Header from "../../components/Header";
import Slider from "../../components/Slider";

import { PageContainer, MainContainer } from "./style";

const Main: React.FC = () => {
  return (
    <PageContainer>
      <Header />
      <MainContainer>
        <Slider slides={slider.items} showArrows={true} showDots={true} />
      </MainContainer>
    </PageContainer>
  );
};

export default Main;
