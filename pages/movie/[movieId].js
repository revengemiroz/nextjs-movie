import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Layout from "../../components/Layout";
import MovieDetails from "../../components/MovieDetails";
import ErrorRecommended from "../../components/ErrorRecommended";
import Header from "../../components/Header";
import MovieList from "../../components/MovieList";
import Pagination from "../../components/Pagination";

import { useGetRecommendedMovies } from "../../utils/useGetRecommendedMovies";
import { useGetMovieDetails } from "../../utils/useGetMovieDetails";
import { useGetCastFromMovies } from "../../utils/useGetCastFromMovies";

function index(props) {
  const [page, setPage] = useState(1);
  const [movieId, setMovieId] = useState();
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    setMovieId(router.query.movieId);
  }, [router.isReady, router.query.movieId]);

  const { data, isLoading, error } = useGetRecommendedMovies(movieId, page);

  const {
    data: movieDetails,
    isLoading: movieDetailsLoading,
  } = useGetMovieDetails(movieId);
  const { data: movieCast } = useGetCastFromMovies(movieId);

  return (
    <Layout>
      <div>
        <MovieDetails
          movieDetails={movieDetails}
          loading={movieDetailsLoading}
          cast={movieCast}
        />
        <Header mainText="recommended" subText="movies" />

        {data?.results?.length > 0 && (
          <>
            <MovieList movies={data}></MovieList>
            {data?.page !== data?.total_pages && (
              <Pagination moviesData={data} onClick={setPage} />
            )}
          </>
        )}
        {data?.results?.length == 0 && <ErrorRecommended />}
      </div>
    </Layout>
  );
}

export default index;
