import React, { useState } from "react";

import Layout from "../../components/Layout";
import MovieList from "../../components/MovieList";
import Header from "../../components/Header";
import Pagination from "../../components/Pagination";

import { useGetUpcomingMovies } from "../../utils/useGetUpcomingMovies";

function index(props) {
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = useGetUpcomingMovies(page);

  return (
    <Layout>
      <div>
        <Header mainText="upcoming" />
        <MovieList movies={data}></MovieList>
        <Pagination moviesData={data} onClick={setPage} />
      </div>
    </Layout>
  );
}

export default index;
