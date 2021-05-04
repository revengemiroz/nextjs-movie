import { useQuery } from "react-query";

import axios from "axios";

export const topRatedQueryKey = (page) => ["getTopRatedTvShows", page];

export const useTopRatedTvShows = (page = 1) =>
  useQuery(
    topRatedQueryKey(page),
    async () => {
      const { data } = await axios.get(`/api/tv/proxy/topRated`, {
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
