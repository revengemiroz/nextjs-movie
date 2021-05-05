import { useQuery } from "react-query";

import axios from "axios";

export const searchMoviesQueryKey = (searchQuery, page, data) => [
  "getMoviesSearched",
  searchQuery,
  page,
  data,
];

export const useGetMoviesSearched = (searchQuery, page, data) =>
  useQuery(
    searchMoviesQueryKey(searchQuery, page, data),
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
      enabled: !!searchQuery,
      keepPreviousData: true,
    }
  );
