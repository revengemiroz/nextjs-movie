import styled from "styled-components";

export const ImageContainer = styled.div`
  width: 5rem;
  height: 5rem;

  img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 50%;
    object-fit: cover;
    background-color: transparent;
    transition: all 100ms cubic-bezier(0.645, 0.045, 0.355, 1);
  }
`;
