import React, { useState, useEffect, useContext } from "react";
import { animateScroll as scroll } from "react-scroll";

import Layout from "../../components/Layout";
import SearchBar from "../../components/SearchBar";
import MovieList from "../../components/MovieList";
import Header from "../../components/Header";
import Pagination from "../../components/Pagination";

import { SwitchContext } from "../../context/SwitchContext";

import { useGetUpcomingMovies } from "../../utils/useGetUpcomingMovies";
import { useLatestTvShows } from "../api/tv/useQuery/useLatestTvShows";
import useWindowResize from "../../utils/useWindowResize";

function index(props) {
  const [page, setPage] = useState(1);
  const size = useWindowResize();
  const { checked } = useContext(SwitchContext);

  useEffect(() => {
    scroll.scrollToTop({
      smooth: true,
    });
  }, [page]);

  const { data: movieData, isLoading, error } = useGetUpcomingMovies(page);
  const { data: tvData } = useLatestTvShows(page);
  console.log(tvData);

  const data = checked ? tvData : movieData;

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
