import { slide } from "../../data";
import Header from "../../components/Header";
import Slider from "../../components/Slider";

import { PageContainer, MainContainer } from "./style";

const Main: React.FC = () => {
  return (
    <PageContainer>
      <Header />
      <MainContainer>
        <Slider slides={slide.items} showArrow={true} showDots={true} />
      </MainContainer>
    </PageContainer>
  );
};

export default Main;
