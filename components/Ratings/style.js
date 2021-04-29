import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  transition: color 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
`;

export const StarContainer = styled.div`
  margin-right: 5px;
  width: 16px;
  height: 16px;

  img {
    width: 100%;
    height: 100%;
  }
`;
