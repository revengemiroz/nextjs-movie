import { useQuery } from "react-query";

import axios from "axios";

export const topRatedQueryKey = (page) => ["getTopRatedMovies", page];

export const useGetTopRatedMovies = (page = 1) =>
  useQuery(
    topRatedQueryKey(page),
    async () => {
      const { data } = await axios.get(`/api/topRated`, {
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
