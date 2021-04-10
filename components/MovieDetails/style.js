import styled from "styled-components";

export const Container = styled.div`
  border: 2px solid green;
  width: 100%;
  /* height: 700px; */
  display: grid;
  grid-template-columns: 1fr minmax(900px, 900px);
  justify-items: center;
  justify-content: center;
  font-family: "Poppins";
`;

export const ImgContainer = styled.div`
  border: 2px solid red;
  width: 400px;

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
`;

export const MovieDetails = styled.div`
  border: 2px solid yellow;
`;

export const MovieHeader = styled.div`
  border: 2px solid green;

  .title {
    color: #263238;
    font-size: 44px;
    font-weight: 300;
    letter-spacing: -0.5px;
    text-transform: uppercase;
    display: block;
  }

  .tagline {
    color: #263238;
    font-size: 17px;
    font-weight: 700;
    letter-spacing: -0.5px;
    text-transform: uppercase;
  }
`;

export const Ratings = styled.div`
  border: 2px solid green;
  width: 100%;
  min-width: 900px;

  .runtime {
    color: #b0bec5;
    font-size: 13px;
    letter-spacing: normal;
    font-weight: 600;
  }
`;

export const Genre = styled.div`
  border: 2px solid green;

  .genreTitle {
    text-transform: uppercase;
    font-size: 14px;
    color: #263238;
    letter-spacing: normal;
    width: 100%;
    display: block;
  }

  .linkContainer {
    display: flex;
    flex-direction: row;
  }
`;
