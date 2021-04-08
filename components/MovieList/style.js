import styled from "styled-components";

export const Container = styled.div`
  border: 2px solid yellow;
  flex: 1;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(256px, 300px));
  justify-content: space-evenly;
  align-content: space-between;
  align-items: start;
  padding: 4rem 0;
  grid-gap: 40px 10px;
`;
