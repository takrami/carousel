import styled from "styled-components";

const SlideItem = styled.li`
  position: relative;
  width: 100%;
`;

const SlideImage = styled.img`
  width: 100%;
  height: 100%;
`;

const SlideContentContainer = styled.div`
  position: absolute;
  bottom: 7%;
  left: 5%;
  right: 5%;
  padding: calc(var(--spacing) * 4) calc(var(--spacing) * 4);
  background-color: rgba(255, 251, 251, 0.5);
`;

const SlideTitle = styled.h2`
  color: var(--primaryColor);
  padding-bottom: calc(var(--spacing) * 2);
  font-weight: bold;
`;

const SlideDescription = styled.p`
  color: var(--primaryColor);
  line-height: calc(var(--spacing) * 6);
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  -webkit-box-orient: vertical;
  &::selection {
    background-color: #4a566e;
    color: #fff;
  }
`;

export {
  SlideItem,
  SlideImage,
  SlideContentContainer,
  SlideTitle,
  SlideDescription,
};
