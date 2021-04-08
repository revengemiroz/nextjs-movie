import React from "react";

import Layout from "../../components/Layout";
import MovieList from "../../components/MovieList";

import { useGetPopularMovies } from "../../utils/useGetPopularMovies";

function index(props) {
  const { data, isLoading, error } = useGetPopularMovies();

  return (
    <Layout>
      <MovieList movies={data}></MovieList>
    </Layout>
  );
}

export default index;
