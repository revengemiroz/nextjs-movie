import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 250px auto;
  position: relative;

  @media ${({ theme }) => theme.mediaQueries.large} {
    display: flex;
    flex-direction: column;
  }

  @media ${({ theme }) => theme.mediaQueries.greateThanLargest} {
    display: grid;
    grid-template-columns: minmax(350px, 400px) auto;
  }
`;

export const RightSide = styled.div`
  padding: 60px 40px 0 40px;
  flex: 1;
`;
