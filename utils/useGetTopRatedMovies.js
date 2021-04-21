import { useQuery } from "react-query";

import tmdb from "../utils/tmdb";

export const topRatedQueryKey = (page) => ["getTopRatedMovies", page];

export const useGetTopRatedMovies = (page = 1) =>
  useQuery(
    topRatedQueryKey(page),
    async () => {
      const { data } = await tmdb.get(`/movie/top_rated`, {
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
