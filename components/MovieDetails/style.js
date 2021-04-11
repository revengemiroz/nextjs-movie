import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  /* height: 700px; */
  display: grid;
  grid-template-columns: 1fr minmax(900px, 900px);
  justify-items: center;
  justify-content: center;
  font-family: "Poppins";
`;

export const ImgContainer = styled.div`
  width: 400px;

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
`;

export const MovieDetails = styled.div``;

export const MovieHeader = styled.div`
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
  margin-bottom: 18px;

  .genreTitle {
    text-transform: uppercase;
    font-size: 16px;
    color: #263238;
    letter-spacing: normal;
    width: 100%;
    display: block;
    font-weight: 700;
    margin-bottom: 10px;
  }

  .linkContainer {
    display: flex;
    flex-direction: row;
  }
`;

export const GenreLink = styled.a`
  color: #263238;
  font-size: 11px;
  font-weight: 700;
  font-family: "Poppins", sans-serif;
  margin-right: 15px;
  transition: all 300ms cubic-bezier(0.075, 0.82, 0.165, 1) 0s;

  :hover {
    transform: translateY(-3px);
  }
`;

export const Synopsis = styled.div`
  margin-bottom: 30px;

  .synopsisTitle {
    text-transform: uppercase;
    font-size: 16px;
    color: #263238;
    letter-spacing: normal;
    width: 100%;
    display: block;
    font-weight: 700;
    margin-bottom: 10px;
  }

  .synopsis {
    font-size: 15px;
    font-weight: 500;
    color: #263238;
  }
`;

export const Cast = styled.div`
  width: 100%;

  .cast {
    text-transform: uppercase;
    font-size: 16px;
    color: #263238;
    letter-spacing: normal;
    width: 100%;
    display: block;
    font-weight: 700;
    margin-bottom: 10px;
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
