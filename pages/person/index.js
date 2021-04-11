import React, { useState } from "react";

import Layout from "../../components/Layout";
import PersonDetails from "../../components/PersonDetails";
import MovieList from "../../components/MovieList";
import Header from "../../components/Header";
import Pagination from "../../components/Pagination";

import { useGetPersonDetails } from "../../utils/useGetPersonDetails";
import { useGetPersonMovies } from "../../utils/useGetPersonMovies";

function index(props) {
  const [page, setPage] = useState(1);

  const { data, isLoading, error } = useGetPersonDetails(47296);
  const { data: personMovies } = useGetPersonMovies(47296, page);

  return (
    <Layout>
      <div>
        <PersonDetails personDetails={data} />
        <Header mainText="also enters in" subText="movies" />
        <MovieList movies={personMovies}></MovieList>
        <Pagination moviesData={personMovies} onClick={setPage} />
      </div>
    </Layout>
  );
}

export default index;
