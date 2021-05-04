import { useQuery } from "react-query";

import axios from "axios";

export const searchTvShowsQueryKey = (searchQuery, page) => [
  "searchTvShowsQueryKey",
  searchQuery,
  page,
];

export const useSearchTvShow = (searchQuery, page, value) =>
  useQuery(
    searchTvShowsQueryKey(searchQuery, page),
    async () => {
      const { data } = await axios.get(searchQuery && `/api/tv/proxy/search`, {
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
