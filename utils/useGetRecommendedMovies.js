import { useQuery } from "react-query";
import tmdb from "./tmdb";

export const useGetRecommendedMovies = (movieId, page) =>
  useQuery(
    ["useGetRecommendedMovies", movieId, page],
    async () => {
      const { data } = await tmdb.get(`/movie/${movieId}/recommendations`, {
        params: {
          page,
        },
      });
      return data;
    },
    {
      keepPreviousData: true,
    }
  );
