import React, { useState, useContext } from "react";
import { useRouter } from "next/router";

import Layout from "../../components/Layout";
import Header from "../../components/Header";
import MovieList from "../../components/MovieList";
import Pagination from "../../components/Pagination";
import SearchBar from "../../components/SearchBar";
import Switch from "../../components/Switch";
import ErrorRecommended from "../../components/ErrorRecommended";

import { SwitchContext } from "../../context/SwitchContext";

import useWindowResize from "../../utils/useWindowResize";
import { useGetMoviesFromGenre } from "../../utils/useGetMoviesFromGenre";
import { useGetTvShowsFromGenre } from "../api/tv/useQuery/useGetTvShowsFromGenre";
import { useGetAllGenres } from "../../utils/useGetAllGenres";

import { SwitchSearchWrapper } from "../../styles/pages/popular";

function index(props) {
  const [page, setPage] = useState(1);
  const { query } = useRouter();
  const genreId = query.id;
  const size = useWindowResize();
  const { value } = useContext(SwitchContext);

  const { data: movies } = useGetMoviesFromGenre(genreId, page);
  const { data: tvShows } = useGetTvShowsFromGenre(genreId, page);
  const { data: allGenres } = useGetAllGenres();

  const getTitleFromGenreId = (data, genreId) => {
    if (data) {
      const result = data?.filter((item) => item?.id == genreId);
      return result[0].name;
    }
  };

  const data = value ? tvShows : movies;

  return (
    <Layout headTitle={getTitleFromGenreId(allGenres, genreId)}>
      <div>
        <SwitchSearchWrapper>
          <Switch />
          {size.width > 1280 && <SearchBar />}
        </SwitchSearchWrapper>

        <Header
          mainText={getTitleFromGenreId(allGenres, genreId)}
          subText="genre"
        />

        {data?.results.length !== 0 && (
          <>
            <MovieList movies={data} />
            <Pagination moviesData={data} onClick={setPage} />
          </>
        )}
        {data?.results.length === 0 && (
          <ErrorRecommended text="this genre tv shows" />
        )}
      </div>
    </Layout>
  );
}

export default index;
