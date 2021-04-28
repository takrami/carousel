import styled from "styled-components";

const HeaderContainer = styled.header`
  flex: 0 1 auto;
  display: flex;
  justify-content: space-between;
  height: 100px;
  align-items: center;
`;

const HeaderTitle = styled.h1`
  color: var(--primaryColor);
`;

const Languages = styled.ul`
  display: flex;
  gap: calc(var(--spacing) * 2);
`;

const Language = styled.li`
  color: red;
`;

export { HeaderContainer, HeaderTitle, Languages, Language };
