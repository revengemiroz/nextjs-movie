import styled from "styled-components";

export const Container = styled.div`
  border-radius: ${({ user }) => (user ? "50%" : "5px")};
  width: 100%;
  height: 100%;
  min-height: 384px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #dbdbdb;
`;
