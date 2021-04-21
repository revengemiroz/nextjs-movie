import React, { useState } from "react";
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

  return (
    <>
      <Container>
        <Link
          href={process.env.NEXT_PUBLIC_URL + `movie/${movie?.id}`}
          passHref
        >
          <a>
            <ImgContainer>
              {!imgLoaded && poster_path ? <Spinner type="black" /> : null}
              {poster_path ? (
                <img
                  src={ImgBaseURL + movie?.poster_path}
                  alt={movie?.title}
                  onLoad={() => setImgLoaded(true)}
                />
              ) : (
                <EmptyImage />
              )}
            </ImgContainer>
          </a>
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
