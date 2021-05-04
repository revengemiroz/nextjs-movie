import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { animateScroll as scroll } from "react-scroll";

import Layout from "../../components/Layout";
import SearchBar from "../../components/SearchBar";
import MovieList from "../../components/MovieList";
import Header from "../../components/Header";
import Pagination from "../../components/Pagination";
import Switch from "../../components/Switch";

import { SwitchContext } from "../../context/SwitchContext";

import { useGetTopRatedMovies } from "../../utils/useGetTopRatedMovies";
import { useTopRatedTvShows } from "../api/tv/useQuery/useTopRatedTvShows";
import useWindowResize from "../../utils/useWindowResize";

import { SwitchSearchWrapper } from "../../styles/pages/popular";

function index(props) {
  const router = useRouter();
  const size = useWindowResize();
  const { checked } = useContext(SwitchContext);

  const [page, setPage] = useState(router?.query?.page ?? 1);

  useEffect(() => {
    router.replace(`/toprated?page=${page}`, undefined, { shallow: true });
    scroll.scrollToTop({
      smooth: true,
    });
  }, [page]);

  const { data: movieData, isLoading, error } = useGetTopRatedMovies(page);
  const { data: tvData } = useTopRatedTvShows(page);

  const data = checked ? tvData : movieData;

  return (
    <Layout headTitle="Top Rated Movies">
      <div>
        <SwitchSearchWrapper>
          <Switch />
          {size.width > 1280 && <SearchBar />}
        </SwitchSearchWrapper>
        <Header
          mainText="top rated"
          subText={checked ? "tv shows" : "movies"}
        />
        <MovieList movies={data} />
        <Pagination moviesData={data} onClick={setPage} />
      </div>
    </Layout>
  );
}

export default index;
