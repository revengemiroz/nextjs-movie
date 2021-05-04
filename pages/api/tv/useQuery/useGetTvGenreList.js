import axios from "axios";
import { useQuery } from "react-query";

let arr = [];

export const useGetTvGenreList = () =>
  useQuery("getAllGenres", async () => {
    const { data: genres } = await axios.get(`/api/tv/proxy/genreList`);
    arr.push(genres);
    return genres?.genres;
  });
