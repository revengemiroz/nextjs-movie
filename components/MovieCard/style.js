import styled from "styled-components";

export const Container = styled.div`
  /* border: 2px solid red; */
  width: 256px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const ImgContainer = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
  /* border: 2px solid green; */

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 2rem 5rem rgba(0, 0, 0, 0.2);
  }
`;

export const MovieTitle = styled.span`
  /* border: 2px solid green; */
  width: 100%;
  text-align: center;
  font-weight: 300;
  font-size: 12px;
  padding: 8px 0;
`;
