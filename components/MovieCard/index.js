import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";

import { SwitchContext } from "../../context/SwitchContext";

import EmptyImage from "../EmptyImage";
import Ratings from "../Ratings";
import Spinner from "../Spinner";

import { ImgBaseURL } from "../../utils/tmdb";

import {
  Container,
  ImgContainer,
  MovieTitle,
  Collection,
  RatingsWrapper,
  Tooltip,
} from "./style";

function index({ movie }) {
  const { poster_path } = movie;
  const [imgLoaded, setImgLoaded] = useState(false);
  const [baseURL, setBaseURL] = useState(undefined);
  const { value } = useContext(SwitchContext);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setBaseURL(window.location.origin);
    }
  }, []);

  const changeRoute = (value, movie) => {
    if (value) {
      return {
        pathname: `${baseURL}/tv`,
        query: { tvId: movie?.id },
      };
    } else {
      return {
        pathname: `${baseURL}/movie`,
        query: { movieId: movie?.id },
      };
    }
  };

  return (
    <>
      <Container>
        <Link href={changeRoute(value, movie)} passHref>
          <ImgContainer>
            {!imgLoaded && poster_path ? <Spinner type="black" /> : null}
            {poster_path ? (
              <img
                style={!imgLoaded ? { display: "none" } : {}}
                src={ImgBaseURL + "w342" + movie?.poster_path}
                alt={movie?.title}
                onLoad={() => setImgLoaded(true)}
              />
            ) : (
              <EmptyImage />
            )}
          </ImgContainer>
        </Link>

        <Collection>
          <MovieTitle>{movie?.title || movie?.name}</MovieTitle>
          <RatingsWrapper>
            <Ratings movieRatings={movie?.vote_average / 2} />
            <Tooltip>
              {movie.vote_average} average rating on {movie.vote_count} votes
            </Tooltip>
          </RatingsWrapper>
        </Collection>
      </Container>
    </>
  );
}

export default index;
