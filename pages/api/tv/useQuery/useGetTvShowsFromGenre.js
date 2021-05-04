import { useQuery } from "react-query";
import axios from "axios";

export const getGenreTvShowsQueryKey = (genreId, page) => [
  "getTvShowsFromGenre",
  genreId,
  page,
];

export const useGetTvShowsFromGenre = (genreId, page) =>
  useQuery(
    getGenreTvShowsQueryKey(genreId, page),
    async () => {
      const { data } = await axios.get(`/api/tv/proxy/tvShowsFromGenre`, {
        params: {
          with_genres: genreId,
          page: page,
        },
      });
      return data;
    },
    {
      keepPreviousData: true,
    }
  );
