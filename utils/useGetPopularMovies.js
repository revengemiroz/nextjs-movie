import { useQuery } from "react-query";
import tmdb from "./tmdb";

export const useGetPopularMovies = () =>
  useQuery("getPopularMovies", async () => {
    const { data } = await tmdb.get(`/movie/popular`);
    return data;
  });
