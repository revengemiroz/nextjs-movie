import styled from "styled-components";

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 5rem;
  min-height: 5rem;
  min-width: 5rem;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    display: block;
    object-fit: cover;
    background-color: transparent;
    transition: all 100ms cubic-bezier(0.645, 0.045, 0.355, 1);
  }
`;
