import { useQuery } from "react-query";
import tmdb from "./tmdb";

export const getGenreMovieQueryKey = (genreId) => [
  "getMoviesFromGenre",
  genreId,
];

export const useGetMoviesFromGenre = (genreId) =>
  useQuery(getGenreMovieQueryKey(genreId), async () => {
    const { data } = await tmdb.get(`/discover/movie`, {
      params: {
        with_genres: genreId ?? 35,
      },
    });
    return data ?? {};
  });
