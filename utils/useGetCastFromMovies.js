import { useQuery } from "react-query";
import axios from "axios";

export const useGetCastFromMovies = (movieId) =>
  useQuery(
    ["useGetCastFromMovies", movieId],
    async () => {
      try {
        const { data } = await axios.get(
          movieId && `/api/castDetails?movieId=${movieId}`
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
