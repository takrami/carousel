import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  flex-flow: column;
  height: 100vh;
  max-width: 900px;
  margin: 0 auto;
`;

const MainContainer = styled.main`
  flex: 1 1 auto;
  display: grid;
  align-items: center;
`;

export { PageContainer, MainContainer };
