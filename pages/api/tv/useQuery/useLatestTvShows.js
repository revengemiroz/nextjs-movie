import { useQuery } from "react-query";
import axios from "axios";

export const useLatestTvShows = (page) =>
  useQuery(
    ["getLatestTvShows", page],
    async () => {
      const { data } = await axios.get(`/api/tv/proxy/latest`, {
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
