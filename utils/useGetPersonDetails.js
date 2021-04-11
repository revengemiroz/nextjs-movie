import { useQuery } from "react-query";
import tmdb from "./tmdb";

export const useGetPersonDetails = (personId) =>
  useQuery(
    ["getPersonDetails", personId],
    async () => {
      const { data } = await tmdb.get(`/person/${personId}`);
      return data;
    },
    {
      keepPreviousData: true,
    }
  );
