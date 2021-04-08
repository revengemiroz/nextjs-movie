import styled from "styled-components";

export const Container = styled.div`
  border: 2px solid green;
`;

export const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Option = styled.button`
  width: 90%;
  border: 1px solid #263238;
  background-color: transparent;
  border-radius: 20px;
  padding: 10px 20px;
  cursor: pointer;
  outline: none;
`;
