import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { animateScroll as scroll } from "react-scroll";

import Layout from "../../components/Layout";
import MovieDetails from "../../components/MovieDetails";
import ErrorRecommended from "../../components/ErrorRecommended";
import Header from "../../components/Header";
import MovieList from "../../components/MovieList";
import Pagination from "../../components/Pagination";

import { useGetRecommendedMovies } from "../../utils/useGetRecommendedMovies";
import { useGetMovieDetails } from "../../utils/useGetMovieDetails";
import { useGetCastFromMovies } from "../../utils/useGetCastFromMovies";
import { useGetMoviesTrailers } from "../../utils/useGetMoviesTrailers";

function index(props) {
  const [page, setPage] = useState(1);
  const [movieId, setMovieId] = useState();
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    setMovieId(router.query.movieId);
  }, [router.isReady, router.query.movieId]);

  useEffect(() => {
    scroll.scrollToTop("movie-list", {
      smooth: true,
      offset: 20,
    });
  }, [page]);

  const { data, isLoading, error } = useGetRecommendedMovies(movieId, page);
  const { data: videos } = useGetMoviesTrailers(movieId);

  const {
    data: movieDetails,
    isLoading: movieDetailsLoading,
  } = useGetMovieDetails(movieId);

  const { data: movieCast } = useGetCastFromMovies(movieId);

  if (!data) {
    return null;
  }

  return (
    <Layout headTitle={movieDetails?.title}>
      <div>
        <MovieDetails
          movieDetails={movieDetails}
          loading={movieDetailsLoading}
          cast={movieCast}
          videos={videos}
        />
        <Header mainText="recommended" subText="movies" />

        {data?.results?.length > 0 && (
          <>
            <MovieList movies={data} />
            <Pagination moviesData={data} onClick={setPage} movieId={movieId} />
          </>
        )}
        {data?.results?.length == 0 && <ErrorRecommended />}
      </div>
    </Layout>
  );
}

export default index;
