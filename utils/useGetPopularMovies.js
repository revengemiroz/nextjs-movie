import { useQuery } from "react-query";
import axios from "axios";

export const useGetPopularMovies = (page = 1) =>
  useQuery(
    ["getPopularMovies", page],
    async () => {
      const { data } = await axios.get(`/api/popular`, {
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
