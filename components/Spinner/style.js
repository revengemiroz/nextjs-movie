import styled, { keyframes } from "styled-components";

const checkType = (colors) => {
  switch (colors) {
    case "white":
      return {
        hex: "#ffffff",
        rgba: "rgba(255, 255, 255, 0.2)",
      };
    case "black":
      return {
        hex: "#000000",
        rgba: "rgba(0, 0, 0, 0.2)",
      };
    default:
      return null;
  }
};

const rotateCircleLoader = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;

export const SpinnerDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ padding }) => `${padding}px`} 0;
`;

export const CircularLoader = styled.div`
  border-radius: 50%;
  width: 25px;
  height: 25px;
  margin: 0rem auto;
  position: relative;
  border-top: 3px solid ${({ colors }) => checkType(colors).rgba};
  border-right: 3px solid ${({ colors }) => checkType(colors).rgba};
  border-bottom: 3px solid ${({ colors }) => checkType(colors).rgba};
  border-left: 3px solid ${({ colors }) => checkType(colors).hex};
  animation: ${rotateCircleLoader} 0.5s infinite linear;
`;
