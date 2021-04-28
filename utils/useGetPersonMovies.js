import { useQuery } from "react-query";
import axios from "axios";

export const useGetPersonMovies = (personId, page) =>
  useQuery(
    ["getPersonMovies", personId, page],
    async () => {
      const { data } = await axios.get(`/api/personMovies`, {
        params: {
          page: page,
          sort_by: "popularity",
          with_people: personId,
        },
      });
      return data;
    },
    {
      keepPreviousData: true,
    }
  );
