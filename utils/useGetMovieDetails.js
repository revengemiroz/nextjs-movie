import { useQuery } from "react-query";
import axios from "axios";

export const getMovieQueryKey = (genreId) => ["getMovieDetails", genreId];

export const useGetMovieDetails = (movieId) =>
  useQuery(
    getMovieQueryKey(movieId),
    async () => {
      try {
        const { data } = await axios.get(
          movieId && `/api/movieDetails?movieId=${movieId}`
        );
        return data;
      } catch (error) {
        return;
      }
    },
    {
      keepPreviousData: true,
    }
  );
