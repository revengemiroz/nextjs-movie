import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    color: #37474f;
    letter-spacing: normal;
  }

  p:first-child {
    font-size: 35px;
    line-height: 56px;
  }

  p:last-child {
    font-size: 18px;
    line-height: 28.8px;
  }
`;

export const ImageContainer = styled.div`
  margin-top: 60px;
  width: 400px;
  height: 400px;

  img {
    max-width: 100%;
    max-height: 100%;
    display: block;
    object-fit: contain;
  }
`;

export const GoHome = styled.button`
  outline: none;
  background-color: #263238;
  color: white;
  border-radius: 5rem;
  border: 1px solid transparent;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  padding: 1.2rem 3rem;
  line-height: 1;
  font-weight: 500;
  font-size: 1.3rem;
  width: auto;
  flex-grow: 0;
  border-radius: 5rem;
  box-shadow: 0 1rem 5rem var(--shadow-color);
  transition: all 600ms cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    transform: translateY(-3px);
    background-color: transparent;
    color: var(--color-primary-dark);
    border: 1px solid var(--color-primary-dark);
    box-shadow: none;
    font-weight: 600;
    transition: all 600ms cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  &:active {
    transform: translateY(2px);
  }

  span {
    margin-left: 10px;
  }
`;
