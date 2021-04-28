import { useQuery } from "react-query";
import axios from "axios";

export const getPersonDetailsQueryKey = (personId) => [
  "getPersonDetails",
  personId,
];

export const useGetPersonDetails = (personId) =>
  useQuery(
    getPersonDetailsQueryKey(personId),
    async () => {
      const { data } = await axios.get(
        personId && `/api/personDetails?personId=${personId}`
      );
      return data;
    },
    {
      keepPreviousData: true,
    }
  );
