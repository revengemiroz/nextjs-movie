import tmdb from "../../../utils/tmdb";

export default async (req, res) => {
  const { with_genres, page } = req.query;
  try {
    const { data } = await tmdb.get(`/discover/movie`, {
      params: {
        with_genres,
        page,
      },
    });
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send({ error });
  }
};
