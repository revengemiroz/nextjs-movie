import { useQuery } from "react-query";
import tmdb from "./tmdb";

export const getGenreMovieQueryKey = (genreId, page) => [
  "getMoviesFromGenre",
  genreId,
  page,
];

export const useGetMoviesFromGenre = (genreId, page) =>
  useQuery(
    getGenreMovieQueryKey(genreId, page),
    async () => {
      const { data } = await tmdb.get(`/discover/movie`, {
        params: {
          with_genres: genreId ?? 35,
          page: page,
        },
      });
      return data ?? {};
    },
    {
      keepPreviousData: true,
    }
  );
