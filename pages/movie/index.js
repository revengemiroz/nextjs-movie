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
import useWindowResize from "../../utils/useWindowResize";

function index(props) {
  const [page, setPage] = useState(1);
  const [movieId, setMovieId] = useState();
  const router = useRouter();
  const size = useWindowResize();

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
    error: movieDetailsError,
  } = useGetMovieDetails(movieId);

  const {
    data: recommendedMovies,
    isLoading,
    error: recommendedError,
  } = useGetRecommendedMovies(movieId, page);

  const {
    data: trailer,
    isLoading: trailerLoading,
    error: trailerError,
  } = useGetMoviesTrailers(movieId);

  const {
    data: movieCast,
    isLoading: movieCastLoading,
    error: movieCastError,
  } = useGetCastFromMovies(movieId);

  return (
    <Layout headTitle={movieDetails?.title}>
      <div>
        {size.width > 1280 && <SearchBar />}
        <MovieDetails
          movieDetails={movieDetails}
          cast={movieCast}
          videos={trailer}
        />
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
