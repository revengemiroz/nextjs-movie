import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { animateScroll as scroll } from "react-scroll";

import Layout from "../../components/Layout";
import MovieList from "../../components/MovieList";
import Header from "../../components/Header";
import Pagination from "../../components/Pagination";

import { useGetTopRatedMovies } from "../../utils/useGetTopRatedMovies";

function index(props) {
  const { query, isReady } = useRouter();
  const router = useRouter();

  const [page, setPage] = useState(query?.page ?? 1);

  useEffect(() => {
    router.replace(`/toprated?page=${page}`, undefined, { shallow: true });
    scroll.scrollToTop({
      smooth: true,
    });
  }, [page]);

  const { data, isLoading, error } = useGetTopRatedMovies(page);

  if (!data) {
    return null;
  }

  if (isLoading) {
    return <p>loading</p>;
  }

  return (
    <Layout headTitle="Top Rated Movies">
      <div>
        <Header mainText="top rated" />
        <MovieList movies={data} />
        <Pagination moviesData={data} onClick={setPage} />
      </div>
    </Layout>
  );
}

export default index;
