import tmdb from "../../../../../utils/tmdb";

export default async (req, res) => {
  const { page } = req.query;
  try {
    const { data } = await tmdb.get(`/tv/on_the_air`, {
      params: {
        page: page,
      },
    });
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send({ error });
  }
};
