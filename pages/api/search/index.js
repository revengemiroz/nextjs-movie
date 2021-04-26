import tmdb from "../../../utils/tmdb";

export default async (req, res) => {
  const { query = "host", page = 1 } = req?.query;
  try {
    const { data } = await tmdb.get(
      `/search/movie?query=${query}&page=${page}`
    );
    console.log(data);
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send({ error });
  }
};
