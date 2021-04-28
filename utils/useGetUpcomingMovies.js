import { useQuery } from "react-query";
import axios from "axios";

export const useGetUpcomingMovies = (page) =>
  useQuery(
    ["getUpcomingMovies", page],
    async () => {
      const { data } = await axios.get(`/api/upcoming`, {
        params: {
          page: page,
        },
      });
      return data;
    },
    {
      keepPreviousData: true,
    }
  );
