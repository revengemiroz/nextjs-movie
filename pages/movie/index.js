import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { animateScroll as scroll } from "react-scroll";

import Layout from "../../components/Layout";
import SearchBar from "../../components/SearchBar";
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
    scroll.scrollToTop({
      smooth: true,
    });
  }, [page]);

  const {
    data: movieDetails,
    isLoading: movieDetailsLoading,
  } = useGetMovieDetails(movieId);

  const {
    data: recommendedMovies,
    isLoading,
    error: recommendedError,
  } = useGetRecommendedMovies(movieId, page);

  const { data: videos } = useGetMoviesTrailers(movieId);

  const { data: movieCast } = useGetCastFromMovies(movieId);

  if (movieDetailsLoading) {
    return <p>loading...</p>;
  }

  if (!recommendedMovies) {
    return null;
  }

  return (
    <Layout headTitle={movieDetails?.title}>
      <div>
        <SearchBar />
        {movieDetails && (
          <MovieDetails
            movieDetails={movieDetails}
            loading={movieDetailsLoading}
            cast={movieCast}
            videos={videos}
          />
        )}
        <Header mainText="recommended" subText="movies" />

        {recommendedMovies?.results?.length > 0 && (
          <>
            <MovieList movies={recommendedMovies} />
            <Pagination
              moviesData={recommendedMovies}
              onClick={setPage}
              movieId={movieId}
            />
          </>
        )}
        {recommendedMovies?.results?.length == 0 && <ErrorRecommended />}
      </div>
    </Layout>
  );
}

export default index;
