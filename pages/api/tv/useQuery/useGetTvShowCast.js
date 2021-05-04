import { useQuery } from "react-query";
import axios from "axios";

export const useGetTvShowCast = (tvId) =>
  useQuery(
    ["useGetTvShowCast", tvId],
    async () => {
      try {
        const { data } = await axios.get(
          tvId && `/api/tv/proxy/cast?tvId=${tvId}`
        );
        return data;
      } catch (error) {
        return;
      }
    },
    {
      keepPreviousData: true,
    }
  );
