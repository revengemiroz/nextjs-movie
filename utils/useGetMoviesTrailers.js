import { useQuery } from "react-query";
import tmdb from "./tmdb";

export const getMoviesTrailersQueryKey = (movieId) => [
  "useGetMoviesTrailers",
  movieId,
];

export const useGetMoviesTrailers = (movieId) =>
  useQuery(
    getMoviesTrailersQueryKey(movieId),
    async () => {
      const { data } = await tmdb.get(`movie/${movieId}/videos`);
      return data ?? {};
    },
    {
      keepPreviousData: true,
    }
  );
