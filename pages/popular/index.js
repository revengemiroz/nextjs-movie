import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { animateScroll as scroll } from "react-scroll";

import Layout from "../../components/Layout";
import SearchBar from "../../components/SearchBar";
import MovieList from "../../components/MovieList";
import Header from "../../components/Header";
import Pagination from "../../components/Pagination";

import { useGetPopularMovies } from "../../utils/useGetPopularMovies";
import useWindowResize from "../../utils/useWindowResize";

function index() {
  const router = useRouter();
  const size = useWindowResize();

  const [page, setPage] = useState(router?.query?.page ?? 1);

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
        {size.width > 1280 && <SearchBar />}
        <Header mainText="popular" />
        <MovieList movies={data?.data}></MovieList>
        <Pagination moviesData={data?.data} onClick={setPage} />
      </div>
    </Layout>
  );
}

export default index;
