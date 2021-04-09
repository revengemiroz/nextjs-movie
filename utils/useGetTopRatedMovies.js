import { useQuery } from "react-query";

import tmdb from "../utils/tmdb";

export const useGetTopRatedMovies = (page = 1) =>
  useQuery("getTopRatedMovies", async () => {
    const { data } = await tmdb.get(`/movie/top_rated`, {
      params: {
        page: page,
      },
    });
    return data;
  });
