import { useQuery } from "react-query";
import tmdb from "./tmdb";

export const useGetCastFromMovies = (movieId = 399566) =>
  useQuery(
    ["useGetCastFromMovies", movieId],
    async () => {
      try {
        const { data } = await tmdb.get(`movie/${movieId}/credits`);
        return data ?? {};
      } catch (error) {
        console.log(error);
      }
    },
    {
      keepPreviousData: true,
    }
  );
