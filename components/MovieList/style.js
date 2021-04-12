import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));
  justify-content: space-evenly;
  align-content: space-between;
  align-items: start;
  place-items: center;
  padding: 4rem 0;
  grid-gap: 40px 20px;
`;
