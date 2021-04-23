import React from "react";

import MovieCard from "../MovieCard";

import { Container } from "./style";

function index({ movies }) {
  if (!movies) {
    return null;
  }

  return (
    <Container className="movie-list">
      {movies?.results?.map((movie) => (
        <MovieCard key={movie?.id} movie={movie} />
      ))}
    </Container>
  );
}

export default index;
