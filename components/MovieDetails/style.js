import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: minmax(30rem, 50rem) 1fr;
  place-items: center;
  margin-bottom: 50px;
  font-family: "Poppins";
  position: relative;
  transition: all 600ms cubic-bezier(0.215, 0.61, 0.355, 1);

  @media ${({ theme }) => theme.mediaQueries.large} {
    display: flex;
    flex-direction: column;
  }
`;

export const ImgContainer = styled.div`
  padding: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    border-radius: 0.8rem;
    box-shadow: 0rem 2rem 5rem var(--shadow-color-dark);
  }

  @media ${({ theme }) => theme.mediaQueries.largest} {
    padding: 3rem;
  }

  @media ${({ theme }) => theme.mediaQueries.large} {
    padding: 2rem;
  }

  @media ${({ theme }) => theme.mediaQueries.smaller} {
    margin-bottom: 2rem;
  }

  @media ${({ theme }) => theme.mediaQueries.large} {
    width: 60%;
    flex: 1 1 60%;
    margin-bottom: 5rem;
  }
`;

export const MovieDetails = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  flex: 1;
  max-width: 750px;
  position: relative;
`;

export const MovieHeader = styled.div`
  margin-bottom: 3rem;

  .title {
    color: #263238;
    font-size: 4rem;
    font-weight: 200;
    line-height: 1.2;
    letter-spacing: -0.5px;
    text-transform: uppercase;
    display: block;
    margin-bottom: 0.5rem;

    @media ${({ theme }) => theme.mediaQueries.large} {
      font-size: 3rem;
    }
  }

  .tagline {
    color: #37474f;
    font-size: 17px;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;

    @media ${({ theme }) => theme.mediaQueries.large} {
      font-size: 1.3rem;
    }
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

    @media ${({ theme }) => theme.mediaQueries.large} {
      font-size: 1.4rem;
    }
  }

  .linkContainer {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }
`;

export const GenreLink = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  line-height: 1;
  font-size: 1.1rem;
  font-weight: 700;
  font-family: "Poppins", sans-serif;
  padding: 0.5rem 0rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  margin-right: 2rem;
  transition: all 300ms cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  :hover {
    transform: translateY(-3px);
  }

  span {
    color: #546e7a;
    margin-left: 5px;
  }
`;

export const Synopsis = styled.div`
  margin-bottom: 30px;
  width: 100%;

  .synopsisTitle {
    text-transform: uppercase;
    font-size: 1.4rem;
    color: #263238;
    letter-spacing: normal;
    width: 100%;
    display: block;
    font-weight: 700;
    margin-bottom: 10px;

    @media ${({ theme }) => theme.mediaQueries.large} {
      font-size: 1.4rem;
    }
  }

  .synopsis {
    font-size: 1.4rem;
    line-height: 1.8;
    color: var(--link-color);
    font-weight: 500;
  }
`;

export const CastContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 3rem;

  .cast {
    text-transform: uppercase;
    font-size: 1.4rem;
    color: #263238;
    letter-spacing: normal;
    width: 100%;
    display: block;
    font-weight: 700;
    margin-bottom: 10px;

    @media ${({ theme }) => theme.mediaQueries.large} {
      font-size: 1.4rem;
    }
  }
`;

export const LinksContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  a {
    text-decoration: none;
    cursor: pointer;
    padding: 8px 30px;
    font-weight: 500;
    font-size: 13px;
    width: auto;
    height: auto;
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
      box-shadow: 0 1rem 5rem var(--shadow-color);
      transition: all 600ms cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
    }

    @media ${({ theme }) => theme.mediaQueries.large} {
      padding: 0.8rem 2.8rem;
      font-size: 1.4rem;
    }
  }
`;
