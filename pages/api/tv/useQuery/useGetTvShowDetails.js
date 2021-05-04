import { useQuery } from "react-query";
import axios from "axios";

export const useGetTvShowDetails = (tvId) =>
  useQuery(
    ["getTvShowDetails", tvId],
    async () => {
      const { data } = await axios.get(
        tvId && `/api/tv/proxy/tvShowDetails?tvId=${tvId}`
      );
      return data;
    },
    {
      keepPreviousData: true,
    }
  );
