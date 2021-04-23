import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { animateScroll as scroll } from "react-scroll";

import Layout from "../../components/Layout";
import SearchBar from "../../components/SearchBar";
import MovieList from "../../components/MovieList";
import Header from "../../components/Header";
import Pagination from "../../components/Pagination";

import { useGetPopularMovies } from "../../utils/useGetPopularMovies";

function index() {
  const { query, isReady } = useRouter();
  const router = useRouter();

  const [page, setPage] = useState(query?.page ?? 1);

  useEffect(() => {
    router.replace(`/popular?page=${page}`, undefined, { shallow: true });
    scroll.scrollToTop({
      smooth: true,
    });
  }, [page]);

  const { data, isLoading, error } = useGetPopularMovies(page);

  return (
    <Layout headTitle="Popular Movies">
      <div>
        <SearchBar />
        <Header mainText="popular" />
        <MovieList movies={data}></MovieList>
        <Pagination moviesData={data} onClick={setPage} />
      </div>
    </Layout>
  );
}

export default index;
