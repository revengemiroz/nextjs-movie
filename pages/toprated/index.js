import React from "react";

import Layout from "../../components/Layout";
import MovieList from "../../components/MovieList";

import { useGetTopRatedMovies } from "../../utils/useGetTopRatedMovies";

function index(props) {
  const page = 1;
  const { data, isLoading, error } = useGetTopRatedMovies(page);

  if (!data) {
    return null;
  }

  if (isLoading) {
    return <p>loading</p>;
  }

  return (
    <Layout>
      <MovieList movies={data}></MovieList>
    </Layout>
  );
}

export default index;
