import React, { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import { animateScroll as scroll } from "react-scroll";

import Layout from "../../components/Layout";
import SearchBar from "../../components/SearchBar";
import ErrorRecommended from "../../components/ErrorRecommended";
import Header from "../../components/Header";
import MovieList from "../../components/MovieList";
import Pagination from "../../components/Pagination";

import { SwitchContext } from "../../context/SwitchContext";

import { useGetMoviesSearched } from "../../utils/useGetMoviesSearched";
import { useSearchTvShow } from "../api/tv/useQuery/useSearchTvShow";
import useWindowResize from "../../utils/useWindowResize";

function index() {
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState();
  const router = useRouter();
  const size = useWindowResize();

  const { value } = useContext(SwitchContext);

  useEffect(() => {
    if (!router?.isReady) return;
    setSearchQuery(router?.query?.searchQuery);
    setPage(1);
  }, [router.isReady, router.query.searchQuery]);

  useEffect(() => {
    scroll.scrollToTop({
      smooth: true,
    });
  }, [page]);

  const { data: searchedMoviesData, isLoading, error } = useGetMoviesSearched(
    searchQuery,
    page,
    value
  );

  const { data: searchedTvShowData } = useSearchTvShow(
    searchQuery,
    page,
    value
  );

  const data = value ? searchedTvShowData : searchedMoviesData;

  return (
    <Layout>
      <div>
        {size.width > 1280 && <SearchBar search={setSearchQuery} />}
        <Header mainText={searchQuery} subText="search results" />

        <MovieList movies={data} />
        <Pagination moviesData={data} onClick={setPage} />

        {data?.results?.length == 0 && <ErrorRecommended />}
      </div>
    </Layout>
  );
}

export default index;
