import axios from "axios";
import { useQuery } from "react-query";

export const useGetAllGenres = () =>
  useQuery("getAllGenres", async () => {
    const { data: genres } = await axios.get(`/api/genreList`);
    return genres?.genres;
  });
