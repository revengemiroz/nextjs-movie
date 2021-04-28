import { useQuery } from "react-query";
import axios from "axios";

export const getMoviesTrailersQueryKey = (movieId) => [
  "useGetMoviesTrailers",
  movieId,
];

export const useGetMoviesTrailers = (movieId) =>
  useQuery(
    getMoviesTrailersQueryKey(movieId),
    async () => {
      try {
        const { data } = await axios.get(
          movieId && `/api/trailer/?movieId=${movieId}`
        );
        return data;
      } catch (error) {
        return;
      }
    },
    {
      keepPreviousData: true,
    }
  );
