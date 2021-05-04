import React, { useState, useEffect, useContext } from "react";
import { animateScroll as scroll } from "react-scroll";

import Layout from "../../components/Layout";
import SearchBar from "../../components/SearchBar";
import MovieList from "../../components/MovieList";
import Header from "../../components/Header";
import Pagination from "../../components/Pagination";
import Switch from "../../components/Switch";

import { SwitchContext } from "../../context/SwitchContext";

import { useGetUpcomingMovies } from "../../utils/useGetUpcomingMovies";
import { useLatestTvShows } from "../api/tv/useQuery/useLatestTvShows";
import useWindowResize from "../../utils/useWindowResize";

import { SwitchSearchWrapper } from "../../styles/pages/popular";

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

  const data = checked ? tvData : movieData;

  return (
    <Layout headTitle="Upcoming Movies">
      <div>
        <SwitchSearchWrapper>
          <Switch />
          {size.width > 1280 && <SearchBar />}
        </SwitchSearchWrapper>
        <Header mainText="upcoming" subText={checked ? "tv shows" : "movies"} />
        <MovieList movies={data} />
        <Pagination moviesData={data} onClick={setPage} />
      </div>
    </Layout>
  );
}

export default index;
