import { useQuery } from "react-query";
import axios from "axios";

export const useGetPersonMovies = (personId, sort_by, page) =>
  useQuery(
    ["getPersonMovies", personId, sort_by, page],
    async () => {
      const { data } = await axios.get(`/api/personMovies`, {
        params: {
          page: page,
          sort_by: sort_by,
          with_people: personId,
        },
      });
      return data;
    },
    {
      keepPreviousData: true,
    }
  );
