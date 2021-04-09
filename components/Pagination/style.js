import styled from "styled-components";

export const Container = styled.div`
  border: 2px solid green;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: ${({ currentPage }) =>
    currentPage === 1 ? "flex-end" : "space-between"};

  button {
    font-weight: 500;
    font-size: 13px;
    font-family: "Poppins", sans-serif;
    background-color: #263238;
    color: #ffffff;
    padding: 10px 25px;
    letter-spacing: 1.1px;
    border-radius: 40px;
    box-shadow: 0 1rem 5rem rgba(0, 0, 0, 0.2);
    transition: 600ms cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
    outline: none;
    border: none;
    cursor: pointer;
  }
`;

export const PaginationButtonFirst = styled.button`
  display: ${({ currentPage }) => (currentPage === 1 ? "none" : "block")};
`;

export const PaginationButtonSecond = styled.button`
  display: block;
`;
