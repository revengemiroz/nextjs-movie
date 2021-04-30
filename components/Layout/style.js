import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 250px auto;
  position: relative;

  @media ${({ theme }) => theme.mediaQueries.greateThanLargest} {
    display: grid;
    grid-template-columns: minmax(250px, 350px) auto;
  }

  @media ${({ theme }) => theme.mediaQueries.large} {
    display: flex;
    flex-direction: column;
  }
`;

export const RightSide = styled.div`
  padding: 60px 40px 0 40px;
  flex: 1;

  @media ${({ theme }) => theme.mediaQueries.medium} {
    padding: 0px 20px 0 20px;
    flex: 1;
  }
`;
