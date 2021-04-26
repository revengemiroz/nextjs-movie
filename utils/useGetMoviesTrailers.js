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
      try {
        const { data } = await tmdb.get(movieId && `movie/${movieId}/videos`);
        return data ?? {};
      } catch (error) {
        console.log(error);
      }
    },
    {
      keepPreviousData: true,
    }
  );
