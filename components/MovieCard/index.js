import React from "react";

import { ImgBaseURL } from "../../utils/tmdb";

import { Container, ImgContainer, MovieTitle } from "./style";

function index({ movie }) {
  return (
    <Container>
      <ImgContainer>
        <img src={ImgBaseURL + movie?.poster_path} />
      </ImgContainer>
      <MovieTitle>{movie?.title}</MovieTitle>
    </Container>
  );
}

export default index;
