import { useQuery } from "react-query";

import axios from "axios";

export const searchMoviesQueryKey = (searchQuery, page) => [
  "getMoviesSearched",
  searchQuery,
  page,
];

export const useGetMoviesSearched = (searchQuery, page, value) =>
  useQuery(
    searchMoviesQueryKey(searchQuery, page),
    async () => {
      const { data } = await axios.get(searchQuery && `/api/search`, {
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
