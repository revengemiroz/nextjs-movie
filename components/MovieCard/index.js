import React, { useState, useEffect } from "react";
import Link from "next/link";

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

  useEffect(() => {
    if (typeof window !== "undefined") {
      setBaseURL(window.location.origin);
    }
  }, []);

  return (
    <>
      <Container>
        <Link
          href={{
            pathname: `${baseURL}/movie`,
            query: { movieId: movie?.id },
          }}
          passHref
        >
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
          <MovieTitle>{movie?.title}</MovieTitle>
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
