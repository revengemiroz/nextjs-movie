import styled from "styled-components";

export const Embla = styled.div`
  background-color: transparent;
  margin: 0 auto;
  max-width: 670px;
`;

export const StyledEmblaViewport = styled.div`
  overflow: hidden;
  width: 100%;
`;

export const StyledEmblaContainer = styled.div`
  display: flex;
  user-select: none;
  -webkit-touch-callout: none;
  -khtml-user-select: none;
  -webkit-tap-highlight-color: transparent;
`;

export const StyledEmblaSlide = styled.div`
  position: relative;
  margin: 0px 8px 0;
  width: 10%;
`;

export const StyledEmblaButton = styled.button`
  outline: 0;
  cursor: pointer;
  touch-action: manipulation;
  position: absolute;
  z-index: 1;
  top: 50%;
  transform: translateY(20%);
  border: 0;
  width: 22px;
  height: 22px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #263238;
  padding: 0;

  &.prev {
    left: 0px;
  }

  &.next {
    right: 0px;
  }

  &:disabled {
    cursor: default;
    display: none;
  }
`;
