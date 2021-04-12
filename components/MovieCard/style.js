import styled from "styled-components";

export const Container = styled.div`
  cursor: pointer;
  width: 256px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const ImgContainer = styled.div`
  width: 100%;
  height: 100%;

  img {
    display: block;
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    border-radius: 0.8rem;
    box-shadow: 0 2rem 5rem rgba(0, 0, 0, 0.2);
    transition: all 100ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
  }
`;

export const MovieTitle = styled.span`
  width: 100%;
  text-align: center;
  font-weight: 300;
  padding: 8px 0;
  font-size: 1.3rem;
  font-weight: 400;
  color: var(--color-primary-light);
  line-height: 1.4;
  transition: color 300ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
`;

export const Collection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RatingsWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  margin-bottom: 0.5rem;
  color: var(--color-primary);

  ${Container}:hover & {
    color: var(--color-primary-lighter);
  }
`;

export const Tooltip = styled.span`
  visibility: hidden;
  opacity: 0;
  width: 120px;
  font-weight: 500;
  font-size: 1.1rem;
  background-color: var(--color-primary-light);
  color: var(--text-color);
  text-align: center;
  border-radius: 6px;
  padding: 1rem;
  position: absolute;
  z-index: 999;
  bottom: 150%;
  left: 50%;
  margin-left: -60px;
  transition: all 200ms cubic-bezier(0.645, 0.045, 0.355, 1);
  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    transition: all 200ms cubic-bezier(0.645, 0.045, 0.355, 1);
    border-color: var(--color-primary-light) transparent transparent transparent;
  }
  ${RatingsWrapper}:hover & {
    visibility: visible;
    opacity: 1;
  }
`;
