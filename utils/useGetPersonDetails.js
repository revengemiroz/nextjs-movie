import { useQuery } from "react-query";
import tmdb from "./tmdb";

export const getPersonDetailsQueryKey = (personId) => [
  "getPersonDetails",
  personId,
];

export const useGetPersonDetails = (personId) =>
  useQuery(
    getPersonDetailsQueryKey(personId),
    async () => {
      const { data } = await tmdb.get(`/person/${personId}`);
      return data;
    },
    {
      keepPreviousData: true,
    }
  );
