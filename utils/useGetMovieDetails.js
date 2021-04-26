import { useQuery } from "react-query";
import tmdb from "./tmdb";

export const getMovieQueryKey = (genreId) => ["getMovieDetails", genreId];

export const useGetMovieDetails = (movieId) =>
  useQuery(
    getMovieQueryKey(movieId),
    async () => {
      try {
        const { data } = await tmdb.get(`movie/${movieId}`);
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    {
      keepPreviousData: true,
    }
  );
