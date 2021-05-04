import { useQuery } from "react-query";
import axios from "axios";

export const getMoviesTrailersQueryKey = (movieId) => [
  "useGetTvShowTrailer",
  movieId,
];

export const useGetTvShowTrailer = (movieId) =>
  useQuery(
    getMoviesTrailersQueryKey(movieId),
    async () => {
      try {
        const { data } = await axios.get(
          movieId && `/api/tv/proxy/trailer/?movieId=${movieId}`
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
