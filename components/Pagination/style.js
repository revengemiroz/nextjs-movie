import styled from "styled-components";

export const Container = styled.div`
  padding: 3rem 1rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: ${({ currentPage }) =>
    currentPage === 1 ? "flex-end" : "space-between"};

  button {
    font-weight: 400;
    font-size: 1.3rem;
    font-family: "Poppins", sans-serif;
    padding: 1.1rem 3rem;
    letter-spacing: 1.1px;
    outline: none;
    border: none;
    cursor: pointer;
    line-height: 1;
    width: auto;
    -moz-box-flex: 0;
    flex-grow: 0;
    color: var(--text-color);
    border: 1px solid transparent;
    background-color: var(--color-primary-dark);
    border-radius: 5rem;
    box-shadow: 0 1rem 5rem var(--shadow-color);
    transition: all 600ms cubic-bezier(0.075, 0.82, 0.165, 1) 0s;

    span {
      width: 100%;
      min-width: 70px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

export const PaginationButtonFirst = styled.button`
  display: block;
`;

export const PaginationButtonSecond = styled.button`
  display: block;
`;
