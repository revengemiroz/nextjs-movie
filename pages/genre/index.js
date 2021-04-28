import React, { useState } from "react";
import { useRouter } from "next/router";

import Layout from "../../components/Layout";
import Header from "../../components/Header";
import MovieList from "../../components/MovieList";
import Pagination from "../../components/Pagination";

import { useGetMoviesFromGenre } from "../../utils/useGetMoviesFromGenre";
import {
  useGetAllGenres,
  getTitleFromGenreId,
} from "../../utils/useGetAllGenres";

function index(props) {
  const [page, setPage] = useState(1);
  const { query } = useRouter();
  const genreId = query.id;

  const { data, isLoading, error } = useGetMoviesFromGenre(genreId, page);
  // const genreTitle = getTitleFromGenreId(data, genreId);

  return (
    <Layout>
      <div>
        <Header mainText={genreId} subText="genre" />
        <MovieList movies={data}></MovieList>
        <Pagination moviesData={data} onClick={setPage} />
      </div>
    </Layout>
  );
}

export default index;
