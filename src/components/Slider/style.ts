import styled from "styled-components";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 4px;
`;

const SliderList = styled.ol<{
  sliderContainerWidth: number;
  currentIndex: number;
  slideWidth: number;
}>`
  display: flex;
  transition: transform 1s ease;
  width: ${({ sliderContainerWidth }) => `${sliderContainerWidth}px`};
  transform: ${({ currentIndex, slideWidth }) =>
    `translate3d(-${currentIndex * slideWidth}px, 0px, 0px)`};
`;

const NextButton = styled(FiChevronRight)`
  color: var(--secondaryColor);
  position: absolute;
  top: 50%;
  right: 1%;
  font-size: 3rem;
  transform: translateY(-50%);
`;

const PrevButton = styled(FiChevronLeft)`
  color: var(--secondaryColor);
  position: absolute;
  top: 50%;
  left: 1%;
  font-size: 3rem;
  transform: translateY(-50%);
`;

const Dots = styled.ol`
  position: absolute;
  display: flex;
  gap: 8px;
  bottom: 2%;
  left: 50%;
  transform: translateX(-50%);
`;

const Dot = styled.li``;

const DotIcon = styled.i<{ isActive: boolean }>`
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ isActive }) =>
    isActive ? "var(--subColor)" : "var(--secondaryColor)"};
`;

export {
  SliderContainer,
  SliderList,
  NextButton,
  PrevButton,
  Dots,
  Dot,
  DotIcon,
};
