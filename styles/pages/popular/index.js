import styled from "styled-components";

export const SwitchSearchWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 1rem;

  @media ${({ theme }) => theme.mediaQueries.large} {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

  @media ${({ theme }) => theme.mediaQueries.medium} {
    margin: 7rem 0 0 0;
  }
`;
