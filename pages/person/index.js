import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Layout from "../../components/Layout";
import Spinner from "../../components/Spinner";
import PersonDetails from "../../components/PersonDetails";
import MovieList from "../../components/MovieList";
import Header from "../../components/Header";
import Pagination from "../../components/Pagination";

import { useGetPersonDetails } from "../../utils/useGetPersonDetails";
import { useGetPersonMovies } from "../../utils/useGetPersonMovies";

function index(props) {
  const [page, setPage] = useState(1);
  const [personId, setPersonId] = useState();

  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    setPersonId(router.query.id);
  }, [router.isReady, router?.query?.id]);

  console.log(router.query.id);

  const { data, isLoading, error } = useGetPersonDetails(personId);
  const { data: personMovies } = useGetPersonMovies(personId, page);

  if (!personMovies || !data) {
    return null;
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Layout headTitle={data?.name}>
      <div>
        <PersonDetails personDetails={data} />
        <Header mainText="also enters in" subText="movies" />
        {personMovies && (
          <>
            <MovieList movies={personMovies} />
            <Pagination moviesData={personMovies} onClick={setPage} />
          </>
        )}
      </div>
    </Layout>
  );
}

export default index;
