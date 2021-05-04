import React, { useState, useContext } from "react";
import { useRouter } from "next/router";

import Layout from "../../components/Layout";
import Header from "../../components/Header";
import MovieList from "../../components/MovieList";
import Pagination from "../../components/Pagination";
import SearchBar from "../../components/SearchBar";
import ErrorRecommended from "../../components/ErrorRecommended";

import { SwitchContext } from "../../context/SwitchContext";

import useWindowResize from "../../utils/useWindowResize";
import { useGetMoviesFromGenre } from "../../utils/useGetMoviesFromGenre";
import { useGetTvShowsFromGenre } from "../api/tv/useQuery/useGetTvShowsFromGenre";
import {
  useGetAllGenres,
  getTitleFromGenreId,
} from "../../utils/useGetAllGenres";

function index(props) {
  const [page, setPage] = useState(1);
  const { query } = useRouter();
  const genreId = query.id;
  const size = useWindowResize();
  const { value } = useContext(SwitchContext);

  const { data: movies } = useGetMoviesFromGenre(genreId, page);
  const { data: tvShows } = useGetTvShowsFromGenre(genreId, page);
  console.log(tvShows);
  // const genreTitle = getTitleFromGenreId(data, genreId);

  const data = value ? tvShows : movies;

  return (
    <Layout>
      <div>
        {size.width > 1280 && <SearchBar />}
        <Header mainText={genreId} subText="genre" />

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
