import styled from "styled-components";

export const Container = styled.div`
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
  border-radius: 4px;
  font-size: 1.3rem;
  margin: 1.5rem 0;
  list-style: none;
  background-color: white;
  box-shadow: 1rem 1rem 5rem #e5ebf1;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const MovieContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const MovieImage = styled.div`
  width: 70px;
  max-height: 80px;
  border-radius: 4px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    backface-visibility: hidden;

    &:hover {
      transform: scale(1.3);
      transition: all linear 0.3s;
      object-fit: contain;
    }
  }
`;

export const MovieDetails = styled.div`
  width: 100%;
  padding: 0.8rem 1.5rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  .movieTitle {
    display: block;
    font-size: 1.3rem;
    line-height: 17px;
    font-weight: 500;
    margin-bottom: 1rem;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  user-select: none;
`;

export const Wrapper = styled.div`
  margin: 0 0.7rem;
  display: flex;
  font-size: 1.1rem;
  flex-direction: row;
  align-items: center;

  span {
    margin-left: 1rem;
  }
`;

export const GenreTitle = styled.span`
  font-size: 1.1rem;
  font-weight: 600;
`;
