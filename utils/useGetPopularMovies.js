import { useQuery } from "react-query";
import axios from "axios";

export const useGetPopularMovies = (page) =>
  useQuery(
    ["getPopularMovies", page],
    async () => {
      const { data } = await axios.get(`/api/popular`, {
        params: {
          page,
        },
      });
      console.log(data);
      return data;
    },
    {
      keepPreviousData: true,
    }
  );
