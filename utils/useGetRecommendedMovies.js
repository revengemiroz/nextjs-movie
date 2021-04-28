import { useQuery } from "react-query";
import axios from "axios";

export const useGetRecommendedMovies = (movieId, page) =>
  useQuery(
    ["useGetRecommendedMovies", movieId, page],
    async () => {
      try {
        const { data } = await axios.get(
          movieId && `/api/recommendation?movieId=${movieId}`,
          {
            params: {
              page: page,
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
