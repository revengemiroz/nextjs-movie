import tmdb from "./tmdb";
import { useQuery } from "react-query";

let arr = [];

export const useGetAllGenres = () =>
  useQuery("getAllGenres", async () => {
    const { data: genres } = await tmdb.get(`genre/movie/list`);
    arr.push(genres);
    return genres?.genres;
  });

export const getTitleFromGenreId = async (data, genreId) => {
  const id = data.filter((item) => item.id == genreId);

  console.log(id);
};
