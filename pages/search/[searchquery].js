import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Layout from "../../components/Layout";
import SearchBar from "../../components/SearchBar";
import ErrorRecommended from "../../components/ErrorRecommended";
import Header from "../../components/Header";
import MovieList from "../../components/MovieList";
import Pagination from "../../components/Pagination";

import { useGetMoviesSearched } from "../../utils/useGetMoviesSearched";

function index() {
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState();
  const router = useRouter();

  useEffect(() => {
    if (!router?.isReady) return;
    setSearchQuery(router?.query?.searchquery);
  }, [router.isReady, router.query.searchquery]);

  const { data, isLoading, error } = useGetMoviesSearched(searchQuery, page);

  if (isLoading) {
    return <p>loading</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <Layout>
      <div>
        <SearchBar search={setSearchQuery} />
        <Header mainText={searchQuery} subText="search results" />
        {data?.results?.length > 0 && (
          <>
            <MovieList movies={data} />
            <Pagination moviesData={data} onClick={setPage} />
          </>
        )}
        {data?.results?.length == 0 && <ErrorRecommended />}
      </div>
    </Layout>
  );
}

export default index;
