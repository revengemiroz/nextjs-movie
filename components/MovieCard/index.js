import React from "react";
import Link from 'next/link'

import { ImgBaseURL } from "../../utils/tmdb";

import { Container, ImgContainer, MovieTitle } from "./style";

function index({ movie }) {
  return (
    <Link href={process.env.NEXT_PUBLIC_URL+`movie/${movie?.id}`}>
    <Container>
      <ImgContainer>
        <img src={ImgBaseURL + movie?.poster_path} />
      </ImgContainer>
      <MovieTitle>{movie?.title}</MovieTitle>
    </Container>
    </Link>
  );
}

export default index;
