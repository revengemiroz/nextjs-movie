import { useQuery } from "react-query";
import tmdb from "./tmdb";

export const useGetUpcomingMovies = (page) =>
  useQuery(
    ["getUpcomingMovies", page],
    async () => {
      const { data } = await tmdb.get(`movie/upcoming`, {
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
