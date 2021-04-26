import { useQuery } from "react-query";
import tmdb from "./tmdb";

export const useGetRecommendedMovies = (movieId, page) =>
  useQuery(
    ["useGetRecommendedMovies", movieId, page],
    async () => {
      try {
        const { data } = await tmdb.get(
          movieId && `/movie/${movieId}/recommendations`,
          {
            params: {
              page,
            },
          }
        );
        return data;
      } catch (error) {}
    },
    {
      keepPreviousData: true,
    }
  );
