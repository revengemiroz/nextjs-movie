import { useQuery } from "react-query";
import axios from "axios";

export const useGetPopularTvShows = (page) =>
  useQuery(
    ["getPopularTvShows", page],
    async () => {
      const { data } = await axios.get(`/api/tv/proxy/popular`, {
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
