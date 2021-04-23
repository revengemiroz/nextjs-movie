import { useQuery } from "react-query";

import tmdb from "../utils/tmdb";

export const searchMoviesQueryKey = (searchQuery, page) => [
  "getMoviesSearched",
  searchQuery,
  page,
];

export const useGetMoviesSearched = (searchQuery, page = 1) =>
  useQuery(
    searchMoviesQueryKey(searchQuery, page),
    async () => {
      const { data } = await tmdb.get(`/search/movie`, {
        params: {
          query: searchQuery,
          page: page,
        },
      });
      return data;
    },
    {
      keepPreviousData: true,
    }
  );
