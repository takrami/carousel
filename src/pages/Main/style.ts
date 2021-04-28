import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  flex-flow: column;
  height: 100vh;
`;

const MainContainer = styled.main`
  max-width: 900px;
  margin: 0 auto;
  flex: 1 1 auto;
  display: grid;
  align-items: center;
`;

export { PageContainer, MainContainer };
