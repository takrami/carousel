import styled from "styled-components";

const HeaderContainer = styled.header`
  flex: 0 1 auto;
  height: 100px;
  padding: calc(var(--spacing) * 4) 0;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
`;

const HeaderTitle = styled.h1`
  color: var(--primaryColor);
  font-size: 3rem;
  transition: all 1s ease-in-out;
  background: -webkit-linear-gradient(
    to right bottom,
    #4a566e,
    #436783,
    #337994,
    #198c9f,
    #009ea2,
    #00ab9c,
    #1cb78e,
    #4dc27a,
    #78c961,
    #a3cd46,
    #d0ce2c,
    #ffcb1c
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right bottom,
    #4a566e,
    #436783,
    #337994,
    #198c9f,
    #009ea2,
    #00ab9c,
    #1cb78e,
    #4dc27a,
    #78c961,
    #a3cd46,
    #d0ce2c,
    #ffcb1c
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  &:hover {
    color: var(--primaryColor);
  }
`;

const Languages = styled.ul`
  display: flex;
  gap: calc(var(--spacing) * 2);
  justify-content: flex-end;
`;

const LanguageText = styled.a`
  color: var(--primaryColor);
  display: inline-block;
  padding: var(--spacing) calc(var(--spacing) * 2);
`;

const Language = styled.li<{ isActive: boolean }>`
  background-color: var(--subColor);
  transition: all 0cubic-bezier(0.55, 0.055, 0.675, 0.19);
  border-radius: 4px;
  font-weight: ${({ isActive }) => (isActive ? "bold" : "normal")};
  &:hover {
    background-color: var(--primaryColor);
    ${LanguageText} {
      color: var(--subColor);
    }
  }
`;

export { HeaderContainer, HeaderTitle, Languages, Language, LanguageText };
