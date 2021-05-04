import tmdb from "../../../../../utils/tmdb";

export default async (req, res) => {
  const { movieId } = req.query;
  try {
    const { data } = await tmdb.get(`/tv/${movieId}/videos`);
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send({ error });
  }
};
