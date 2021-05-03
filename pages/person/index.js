import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { animateScroll as scroll } from "react-scroll";

import Layout from "../../components/Layout";
import DropDown from "../../components/DropDown";
import SearchBar from "../../components/SearchBar";
import Spinner from "../../components/Spinner";
import PersonDetails from "../../components/PersonDetails";
import MovieList from "../../components/MovieList";
import Header from "../../components/Header";
import Pagination from "../../components/Pagination";

import { useGetPersonDetails } from "../../utils/useGetPersonDetails";
import { useGetPersonMovies } from "../../utils/useGetPersonMovies";
import useWindowResize from "../../utils/useWindowResize";

export const options = [
  {
    value: "popularity.desc",
    label: "Popularity",
  },
  {
    value: "vote_average.desc",
    label: "Votes Average",
  },
  {
    value: "original_title.asc",
    label: "Title",
  },
  {
    value: "release_date.desc",
    label: "Release Date",
  },
];

function index(props) {
  const [page, setPage] = useState(1);
  const [personId, setPersonId] = useState();
  const [sortBy, setSortBy] = useState(options[0].value);
  const size = useWindowResize();

  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    setPersonId(router.query.id);
  }, [router.isReady, router?.query?.id]);

  useEffect(() => {
    scroll.scrollToTop({
      smooth: true,
    });
  }, [page]);

  const { data, isLoading, error } = useGetPersonDetails(personId);
  const { data: personMovies } = useGetPersonMovies(personId, sortBy, page);

  if (!personMovies || !data) {
    return null;
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Layout headTitle={data?.name}>
      <div>
        {size.width > 1280 && <SearchBar />}
        <PersonDetails personDetails={data} />
        <Header mainText="also enters in" subText="movies" />
        <DropDown
          options={options}
          defaultValue={options[0]}
          onChange={(e) => setSortBy(e.value)}
        />
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
