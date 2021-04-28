import { useQuery } from "react-query";
import axios from "axios";

export const getGenreMovieQueryKey = (genreId, page) => [
  "getMoviesFromGenre",
  genreId,
  page,
];

export const useGetMoviesFromGenre = (genreId, page) =>
  useQuery(
    getGenreMovieQueryKey(genreId, page),
    async () => {
      const { data } = await axios.get(`/api/moviesFromGenre`, {
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
