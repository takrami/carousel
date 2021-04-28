import styled, { keyframes } from "styled-components";

const vibration = keyframes`
 0% {
    -webkit-transform: translate(2px, 1px) rotate(0deg);
  }
  10% {
    -webkit-transform: translate(-1px, -2px) rotate(-2deg);
  }
  20% {
    -webkit-transform: translate(-3px, 0px) rotate(3deg);
  }
  30% {
    -webkit-transform: translate(0px, 2px) rotate(0deg);
  }
  40% {
    -webkit-transform: translate(1px, -1px) rotate(1deg);
  }
  50% {
    -webkit-transform: translate(-1px, 2px) rotate(-1deg);
  }
  60% {
    -webkit-transform: translate(-3px, 1px) rotate(0deg);
  }
  70% {
    -webkit-transform: translate(2px, 1px) rotate(-2deg);
  }
  80% {
    -webkit-transform: translate(-1px, -1px) rotate(4deg);
  }
  90% {
    -webkit-transform: translate(2px, 2px) rotate(0deg);
  }
  100% {
    -webkit-transform: translate(1px, -2px) rotate(-1deg);
  }
`;

const HeaderContainer = styled.header`
  flex: 0 1 auto;
  display: flex;
  justify-content: space-between;
  height: 100px;
  align-items: center;
`;

const HeaderTitle = styled.h1`
  color: var(--primaryColor);
  font-size: 3em;
  &:hover {
    animation-name: ${vibration};
    animation-duration: 0.8s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    transform-origin: 50% 100%;
  }
`;

const Languages = styled.ul`
  display: flex;
  gap: calc(var(--spacing) * 2);
`;

const LanguageText = styled.a`
  color: var(--primaryColor);
  display: inline-block;
  padding: var(--spacing) calc(var(--spacing) * 2);
`;

const Language = styled.li`
  background-color: var(--subColor);
  transition: all 0cubic-bezier(0.55, 0.055, 0.675, 0.19);
  border-radius: 4px;
  &:hover {
    background-color: var(--primaryColor);
    ${LanguageText} {
      color: var(--subColor);
    }
  }
`;

export { HeaderContainer, HeaderTitle, Languages, Language, LanguageText };
