import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 250px auto;
  position: relative;

  @media ${({ theme }) => theme.mediaQueries.medium} {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 250px 1fr;
  }
`;

export const RightSide = styled.div`
  padding: 60px 40px 0 40px;
  flex: 1;
`;
