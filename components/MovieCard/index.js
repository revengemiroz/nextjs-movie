import React from "react";
import Link from "next/link";

import Ratings from "../Ratings";

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
  console.log(movie);
  return (
    <>
      <Container>
        <Link href={process.env.NEXT_PUBLIC_URL + `movie/${movie?.id}`}>
          <ImgContainer>
            <img src={ImgBaseURL + movie?.poster_path} alt={movie?.title} />
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
