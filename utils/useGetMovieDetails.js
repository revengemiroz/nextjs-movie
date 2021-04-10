import { useQuery } from "react-query";
import tmdb from "./tmdb";

export const getMovieQueryKey = (genreId, page) => [
  "getMovieDetails",
  genreId,
  page,
];

export const useGetMovieDetails = (movieId, page) =>
  useQuery(
    getMovieQueryKey(movieId, page),
    async () => {
      const { data } = await tmdb.get(`movie/${movieId}`);
      return data ?? {};
    },
    {
      keepPreviousData: true,
    }
  );
