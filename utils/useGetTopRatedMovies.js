import { useQuery } from "react-query";

import tmdb from "../utils/tmdb";

export const useGetTopRatedMovies = () =>
  useQuery("getTopRatedMovies", async () => {
    const { data } = await tmdb.get(`/movie/top_rated?&page=3`);
    return data;
  });
