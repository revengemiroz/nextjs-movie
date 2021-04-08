import React from "react";

import Layout from "../../components/Layout";
import MovieList from "../../components/MovieList";

import { useGetTopRatedMovies } from "../../utils/useGetTopRatedMovies";

function index(props) {
  const { data, isLoading, error } = useGetTopRatedMovies();

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
