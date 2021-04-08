import React from "react";
import { useRouter } from "next/router";

import Layout from "../../components/Layout";
import MovieList from "../../components/MovieList";

import { useGetMoviesFromGenre } from "../../utils/useGetMoviesFromGenre";

function index(props) {
  const { query } = useRouter();
  const genreId = query.genreId;

  const { data, isLoading, error } = useGetMoviesFromGenre(genreId);

  return (
    <Layout>
      <MovieList movies={data}></MovieList>
    </Layout>
  );
}

export default index;
