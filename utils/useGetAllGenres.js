import tmdb from "./tmdb";
import { useQuery } from "react-query";

export const useGetAllGenres = () =>
  useQuery("getAllGenres", async () => {
    const { data: genres } = await tmdb.get(`genre/movie/list`);
    // console.log(genres);
    return genres?.genres;
  });
