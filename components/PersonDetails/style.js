import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto 800px;
  place-items: center;
`;

export const ImgContainer = styled.div`
  padding: 40px;
  width: 440px;
  height: 640px;

  img {
    max-width: 100%;
    max-height: 100%;
    height: auto;
    display: block;
    object-fit: contain;
    border-radius: 0.8rem;
    box-shadow: 0rem 2rem 5rem rgba(0, 0, 0, 0.25);
  }
`;

export const PersonDetails = styled.div`
  width: 100%;
`;

export const Name = styled.span`
  display: block;
  font-size: 50px;
  font-weight: 200;
  line-height: 1.2;
  color: #263238;
  letter-spacing: -0.5px;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

export const DateOfBirth = styled.span`
  display: block;
  margin-bottom: 50px;
  font-size: 13px;
  line-height: 1;
  font-weight: 700;
  color: #263238;
`;

export const Biography = styled.div`
  width: 100%;

  .biographyTitle {
    color: #263238;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 10px;
    font-size: 14px;
  }

  .biography {
    font-size: 14px;
    line-height: 1.8;
    color: #263238;
    font-weight: 500;
    margin-bottom: 30px;
  }
`;

export const ExternalLinks = styled.div`
  width: 100%;

  a {
    text-decoration: none;
    outline: currentcolor none medium;
    cursor: pointer;
    padding: 8px 30px;
    line-height: 1;
    font-weight: 500;
    font-size: 13px;
    width: auto;
    -moz-box-flex: 0;
    flex-grow: 0;
    color: #263238;
    border: 1px solid #263238;
    background-color: transparent;
    border-radius: 5rem;
    margin-right: 20px;

    :hover {
      transform: translateY(-3px);
      background-color: #263238;
      color: white;
      border: 1px solid transparent;
      box-shadow: 0 1rem 5rem rgba(0, 0, 0, 0.2);
      transition: all 600ms cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
    }
  }
`;
