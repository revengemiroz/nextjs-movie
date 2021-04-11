import { useQuery } from "react-query";
import tmdb from "./tmdb";

export const useGetPersonMovies = (personId, page) =>
  useQuery(
    ["getPersonMovies", personId, page],
    async () => {
      const { data } = await tmdb.get(`/discover/movie/`, {
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
