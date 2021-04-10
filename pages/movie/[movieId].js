import React, { useState } from "react";
import { useRouter } from "next/router";

import Layout from "../../components/Layout";
import MovieDetails from "../../components/MovieDetails";
import Header from "../../components/Header";
import MovieList from "../../components/MovieList";
import Pagination from "../../components/Pagination";

import { useGetRecommendedMovies } from "../../utils/useGetRecommendedMovies";
import { useGetMovieDetails } from "../../utils/useGetMovieDetails";

function index(props) {
  const [page, setPage] = useState(1);
  const { query } = useRouter();
  console.log(query.movieId);

  const { data, isLoading, error } = useGetRecommendedMovies(
    query.movieId,
    page
  );

  const { data: movieDetails } = useGetMovieDetails(query.movieId);

  console.log(data);

  return (
    <Layout>
      <div>
        <MovieDetails movieDetails={movieDetails}></MovieDetails>
        <Header mainText="recommended" subText="movies" />

        <MovieList movies={data}></MovieList>
        <Pagination moviesData={data} onClick={setPage} />
      </div>
    </Layout>
  );
}

export default index;
