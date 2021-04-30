import React, { useState } from "react";

import Layout from "../../components/Layout";
import SearchBar from "../../components/SearchBar";
import MovieList from "../../components/MovieList";
import Header from "../../components/Header";
import Pagination from "../../components/Pagination";

import { useGetUpcomingMovies } from "../../utils/useGetUpcomingMovies";
import useWindowResize from "../../utils/useWindowResize";

function index(props) {
  const [page, setPage] = useState(1);
  const size = useWindowResize();
  const { data, isLoading, error } = useGetUpcomingMovies(page);

  return (
    <Layout headTitle="Upcoming Movies">
      <div>
        {size.width > 1280 && <SearchBar />}
        <Header mainText="upcoming" />
        <MovieList movies={data} />
        <Pagination moviesData={data} onClick={setPage} />
      </div>
    </Layout>
  );
}

export default index;
