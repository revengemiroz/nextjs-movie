import { useQuery } from "react-query";
import axios from "axios";

export const useGetRecommendedTvShows = (tvId, page) =>
  useQuery(
    ["useGetRecommendedTvShows", tvId, page],
    async () => {
      try {
        const { data } = await axios.get(
          tvId && `/api/tv/proxy/recommended?tvId=${tvId}`,
          {
            params: {
              page: page,
            },
          }
        );

        return data;
      } catch (error) {}
    },
    {
      keepPreviousData: true,
    }
  );
