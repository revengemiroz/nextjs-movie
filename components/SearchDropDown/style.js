import styled from "styled-components";

export const Container = styled.div`
  /* border: 2px solid green; */
  position: absolute;
  width: 100%;
  display: ${({ hideit }) => (hideit == 1 ? "none" : "block")};
  height: auto;
  padding: 0rem 1rem;
  background-color: white;
  box-shadow: 10px 10px 40px 4px rgba(45, 78, 255, 0.15);
  border-radius: 7px;
  z-index: 99;
`;

export const List = styled.li`
  border-radius: 4px 4px 0 0;
  font-size: 1.3rem;
  margin: 1.5rem 0;
  list-style: none;
  box-shadow: 1rem 1rem 5rem #d7e0ea;
  cursor: pointer;
`;

export const MovieContainer = styled.div`
  /* border: 2px solid green; */
  display: flex;
  flex-direction: row;
`;

export const MovieImage = styled.div`
  width: 50px;
  /* border: 2px solid yellow; */
  border-radius: 4px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    backface-visibility: hidden;
  }
`;

export const MovieDetails = styled.div`
  width: 100%;
  /* border: 2px solid green; */
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-around;
  flex-direction: column;

  .movieTitle {
    display: block;
    font-size: 1.3rem;
    border: 2px solid green;
    line-height: 17px;
  }
`;

export const Details = styled.div`
  /* border: 2px solid green; */
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Rating = styled.div`
  margin: 0 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;

  span {
    margin-left: 0.8rem;
  }
`;
