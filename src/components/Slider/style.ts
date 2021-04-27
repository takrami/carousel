import styled from "styled-components";
import { FiArrowRightCircle, FiArrowLeftCircle } from "react-icons/fi";
import { GoPrimitiveDot } from "react-icons/go";

const SliderContainer = styled.div`
  border: 1px solid blue;
  position: relative;
  width: 100%;
  overflow: hidden;
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
/* transform: ${({ current, width }: { current: number; width: number }) =>
    `translate3d(-${current * width}px, 0px, 0px)`}; */
// transform: ${({ current, width }: { current: number; width: number }) =>
// `translate3d(-${current * width}px, 0px, 0px)`};

const NextButton = styled(FiArrowRightCircle)`
  color: var(--primaryColor);
  position: absolute;
  top: 50%;
  right: 1%;
  font-size: 3rem;
  transform: translateY(-50%);
`;

const PrevButton = styled(FiArrowLeftCircle)`
  color: var(--primaryColor);
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

const DotIcon = styled(GoPrimitiveDot)<{ isActive: boolean }>`
  color: var(--primaryColor);
  color: ${({ isActive }) =>
    isActive ? "var(--secondaryColor)" : "var(--primaryColor)"};
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
