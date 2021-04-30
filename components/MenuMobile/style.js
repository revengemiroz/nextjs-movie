import styled from "styled-components";

export const Container = styled.div`
  position: sticky;
  top: 0;
  flex: 1;
  width: 100%;
  max-height: 55px;
  padding: 1.3rem 1.7rem;
  background-color: #b0bec5;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 9999 !important;
`;

export const Hamburger = styled.div`
  border: none;
  outline: none;
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: space-around;
  width: 25px;
  line-height: 1;
  height: auto;
  background-color: transparent;
  cursor: pointer;
`;

export const Bar = styled.span`
  transition: all 0.3s;
  border-radius: 10px;
  margin: 2px 0;
  height: 4px;
  width: 100%;
  display: inline-block;
  background-color: var(--color-primary);
`;
