import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  border: 1px solid green;
  height: 100%;
  display: grid;
  grid-template-columns: minmax(400px, 600px) 1fr;
  place-items: center;
  padding: 30px 0;
  font-family: "Poppins";
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 400px;
  min-height: 540px;

  img {
    max-width: 100%;
    max-height: 100%;
    display: block;
    object-fit: cover;
  }
`;

export const MovieContainer = styled.div`
  width: 100%;
  height: 100%;
  /* display: flex;
  justify-content: center;
  overflow: hidden; */
  /* margin-left: 120px; */
`;

export const MovieDetails = styled.div`
  border: 1px solid red;
  width: 100%;
  max-width: 750px;
  height: 100%;
`;

export const MovieHeader = styled.div`
  .title {
    color: #263238;
    font-size: 40px;
    font-weight: 300;
    line-height: 60px;
    letter-spacing: -0.5px;
    text-transform: uppercase;
    display: block;
  }

  .tagline {
    color: #37474f;
    font-size: 17px;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
`;

export const RatingsContainer = styled.div`
  width: 100%;
  margin: 12px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .rating {
    display: flex;
    align-items: center;
  }

  .runtime {
    color: #b0bec5;
    font-size: 13px;
    letter-spacing: normal;
    font-weight: 600;
    text-transform: uppercase;
  }
`;

export const RatingsNumber = styled.span`
  font-size: 13px;
  color: #37474f;
  font-weight: 700;
  margin-left: 12px;
`;

export const Genre = styled.div`
  margin-top: 40px;
  margin-bottom: 30px;

  .genreTitle {
    text-transform: uppercase;
    font-size: 14px;
    line-height: 22.4px;
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
  text-decoration: none;
  text-transform: uppercase;
  line-height: 11px;
  font-size: 12px;
  font-weight: 700;
  font-family: "Poppins", sans-serif;
  margin-right: 15px;
  transition: all 300ms cubic-bezier(0.075, 0.82, 0.165, 1) 0s;

  :hover {
    transform: translateY(-3px);
  }

  span {
    color: #546e7a;
    margin-left: 7px;
  }
`;

export const Synopsis = styled.div`
  margin-bottom: 30px;
  width: 100%;

  .synopsisTitle {
    text-transform: uppercase;
    font-size: 14px;
    color: #263238;
    letter-spacing: normal;
    width: 100%;
    display: block;
    font-weight: 700;
    margin-bottom: 10px;
  }

  .synopsis {
    font-size: 15px;
    font-weight: 400;
    color: #444444;
  }
`;

export const CastContainer = styled.div`
  position: relative;
  width: 100%;

  .cast {
    text-transform: uppercase;
    font-size: 14px;
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
