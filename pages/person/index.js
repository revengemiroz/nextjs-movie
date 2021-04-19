import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Layout from "../../components/Layout";
import PersonDetails from "../../components/PersonDetails";
import MovieList from "../../components/MovieList";
import Header from "../../components/Header";
import Pagination from "../../components/Pagination";

import { useGetPersonDetails } from "../../utils/useGetPersonDetails";
import { useGetPersonMovies } from "../../utils/useGetPersonMovies";

function index(props) {
  const [page, setPage] = useState(1);

  const router = useRouter();
  const personId = router?.query?.id;

  const { data, isLoading, error } = useGetPersonDetails(personId);
  const { data: personMovies } = useGetPersonMovies(personId, page);

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
