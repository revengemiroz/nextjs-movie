import { useQuery } from "react-query";
import tmdb from "./tmdb";

export const getMovieQueryKey = (genreId) => ["getMovieDetails", genreId];

export const useGetMovieDetails = (movieId) =>
  useQuery(
    getMovieQueryKey(movieId),
    async () => {
      const { data } = await tmdb.get(`movie/${movieId}`);
      return data ?? {};
    },
    {
      keepPreviousData: true,
    }
  );
